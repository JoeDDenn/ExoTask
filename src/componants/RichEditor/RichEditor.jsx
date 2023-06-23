import React, { useState, useEffect } from "react";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

// Firebase imports
import { storage } from "./FBStore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const placeholder = {
  // Your existing placeholder content here.
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

  // const onContentStateChange = (editor_state) => {
  //   setContent(editor_state);

  //   if (hasFetchedInitialData) {
  //     // Only save changes after fetching initial data.
  //     const raw_content = convertToRaw(editor_state.getCurrentContent());
  //     handleEditorChange(raw_content);
  //   }
  // };

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
        onEditorStateChange={onEditorStateChange} // Change this line.
        editorState={content}
      />
    </div>
  );
}
