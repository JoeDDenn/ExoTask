import React, { useState, useEffect } from "react";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import { Editor, link, image, embedded, emoji } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

// Firebase imports
import { storage } from "./FBStore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const placeholder = {
  entityMap: {},
  blocks: [
    {
      key: "initial",
      text: "Start Documenting Your Work Here!",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
    },
  ],
};

const handleEditorChange = (content) => {
  const wsid = localStorage.getItem("defwsid");

  // Convert editor state back to raw JSON string before uploading.
  const rawContentJSONString = JSON.stringify(content);

  const file = new File([rawContentJSONString], `${wsid}Doc.json`, {
    type: "application/json",
  });

  if (!file) return;

  console.log(file);

  const storageRef = ref(storage, `files/${wsid}/${wsid}Doc.json`);

  uploadBytesResumable(storageRef, file).catch((error) => alert(error));
};

const uploadImageCallBack = (file) => {
  return new Promise(async (resolve, reject) => {
    // Implement your own logic here using Firebase Storage or another service.
    const wsid = localStorage.getItem("defwsid");
    const storageRef = ref(storage, `images/${wsid}/${file.name}`);

    try {
      const snapshot = await uploadBytesResumable(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      resolve({ data: { link: url } });
    } catch (error) {
      console.error("Error uploading image:", error);
      reject(error);
    }
  });
};

export default function RichEditor(props) {
  const [content, setContent] = useState(EditorState.createEmpty());
  const [hasFetchedInitialData, setHasFetchedInitialData] = useState(false);

  const loadInitialData = async () => {
    const wsid = localStorage.getItem("defwsid");
    const storageRef = ref(storage, `files/${wsid}/${wsid}Doc.json`);

    try {
      const url = await getDownloadURL(storageRef);
      const response = await fetch(url);
      return response.json(); // Return data as a JSON object.
    } catch (error) {
      console.log("Error loading initial data:", error);
      if (error.code === "storage/object-not-found") {
        // If file not found in storage, create and upload it with placeholder content before returning.
        handleEditorChange(placeholder);
        return placeholder;
      }
      return placeholder; // Return default placeholder in case of an error.
    }
  };

  useEffect(() => {
    loadInitialData().then((loadedData) => {
      const newContent = convertFromRaw(loadedData);
      const newEditorState = EditorState.push(content, newContent);
      setContent(newEditorState);
      setHasFetchedInitialData(true); // Set flag once initial data is fetched.
    });
  }, []);

  const onEditorStateChange = (editor_state) => {
    setContent(editor_state);

    if (hasFetchedInitialData) {
      // Only save changes after fetching initial data.
      const raw_content = convertToRaw(editor_state.getCurrentContent());
      handleEditorChange(raw_content);
    }
  };

  return (
    <div>
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        editorState={content}
        toolbar={{
          link: { inDropdown: true },
          image: {
            urlEnabled: true,
            uploadEnabled: true,
            uploadCallback: uploadImageCallBack,
            alignmentEnabled: false,
            previewImage: true,
            defaultSize: { width: "100%", height: "auto" },
          },
          embedded: {
            defaultSize: {
              height: "auto",
              width: "100%",
            },
          },
          emoji: {},
          fontFamily: {
            options: [
              "Arial",
              "Georgia",
              "Impact",
              "Tahoma",
              "Times New Roman",
            ],
          },
          fontSize: {},
        }}
      />
    </div>
  );
}
