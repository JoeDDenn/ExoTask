import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from "react";
import { storage } from './FBStore';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


const handleEditorChange = (content) => {
  const wsid = localStorage.getItem('defwsid'); 
  
  //turn json into a file to upload
  const file = new File([content], `${wsid}Doc.json`, {
    type: "application/json",
  });
  
  if (!file) return;

  const storageRef = ref(storage, `files/${wsid}/${wsid}Doc.json`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on("state_changed",
  (snapshot) => {
  },
  (error) => {
    alert(error);
  },
);
}

const loadDoc = () => {
  const wsid = localStorage.getItem('defwsid');
  const storageRef = ref(storage, `files/${wsid}/${wsid}Doc.json`);
  const req = {
    method: 'GET',
    mode: 'no-cors',
  }
  getDownloadURL(storageRef)
  .then((url) => {
    fetch(
      {method: 'GET', mode: 'no-cors'}
      ,url)
    .then((res) => res.json())
    .then((loadedContent) => {
      content = loadedContent;
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .catch((error) => {
    console.log(error);
  });
}

let test = loadDoc();
let placeholder = {
  "blocks": [
    {
      "key": "637gr",
      "text": "This is a paragraph",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 10,
          "length": 9,
          "style": "BOLD"
        },
        {
          "offset": 10,
          "length": 9,
          "style": "ITALIC"
        },
        {
          "offset": 10,
          "length": 9,
          "style": "UNDERLINE"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "9g3nc",
      "text": " ",
      "type": "atomic",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [
        {
          "offset": 0,
          "length": 1,
          "key": 0
        }
      ],
      "data": {}
    },
  ]
  ,
  "entityMap": {
    "0": {
      "type": "IMAGE",
      "mutability": "IMMUTABLE",
      "data": {
        "src": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      }
    }
  }
};

let content = test? test : placeholder;

class RichEditor extends Component {
    constructor(props) {
        super(props);
        let doc = loadDoc();
        console.log("doc = "+doc);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
        }
    }
    
    onContentStateChange = (contentState) => {
        this.setState({
            contentState,
      });
      handleEditorChange(JSON.stringify(contentState));
    };
    
    render() {
      content = loadDoc();
      return (
        <div>
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onContentStateChange={this.onContentStateChange}
          />
        </div>
      );
    }
}

export default RichEditor