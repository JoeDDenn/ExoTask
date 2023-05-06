import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const Addvideo = () => {

  const addMediaBlock = () => {
    const block = {
      type: 'video',
      className: 'WSMedia',
      data: {
        file: {
          url: ''
        }
      }
    };
    AddBlock(block.type, block, block.className);
  };

  return (
    <div className="ComponentList-item-title">
      <button className="ComponentList-item-title-button" onClick={addMediaBlock}>
        Add video 
      </button>
    </div>
  );
};

export default Addvideo;


function AddBlock(type, block, className) {

  //find workspace
  const workspace = document.getElementById('workspace');
  //create new block
  const newBlock = document.createElement('div');
  newBlock.className = "Block";
  const id = newBlock.id = uuid();
  switch (type) {
      case 'paragraph':
      case 'Paragraph':
          //add a paragraph to new block
          const newParagraph = document.createElement('p');
          newParagraph.innerHTML = block.text;
          newParagraph.contentEditable = true;
          newParagraph.className = className;
          newBlock.appendChild(newParagraph);
          break;
      case 'heading':
          const newHeading = document.createElement('h1');
          newHeading.innerHTML = block.text;
          newHeading.contentEditable = true;
          newHeading.className = className;
          newBlock.appendChild(newHeading);
          break;
      case 'image':
      case 'Image':
          //add a image to new block
          const newImage = document.createElement('img');
          if(block.phote === ""){
              //ask user for url
              const fileSelect = document.createElement('input');
              fileSelect.type = 'file';
              fileSelect.accept = 'image/*,video/*';
              fileSelect.click();
              fileSelect.onchange = () => {
                const file = fileSelect.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  newImage.src = reader.result;
                  };
              };
          }
          else{
              //turn a byte array to an image
              const imageBytes = block.phote;
              const arrayBuffer = decode(imageBytes);
              const blob = new Blob([arrayBuffer], {type: 'image/jpeg'});
              const urlCreator = window.URL || window.webkitURL;
              const imageUrl = urlCreator.createObjectURL(blob);
              newImage.src = imageUrl;
          }   

          newImage.className = className + " WSImage";
          newBlock.appendChild(newImage);
          break;
      case 'video':
          //add a video to new block
          const newVideo = document.createElement('video');
          newVideo.controls = true;
          if(block.data.file.url === ""){
              //ask user for url
              const fileSelect = document.createElement('input');
              fileSelect.type = 'file';
              fileSelect.accept = 'video/*';
              fileSelect.click();
              fileSelect.onchange = () => {
                  const file = fileSelect.files[0];
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => {
                      newVideo.src = reader.result;
                  };
              };
          }

          else{
              newVideo.src = block.data.file.url;
          }
          newVideo.className = className;
          newBlock.appendChild(newVideo);
          break;      
      case 'webpage':
          const newIframe = document.createElement('iframe');
          newIframe.className = className;
          // ask user for url
          const url = block.data.url;
          //set src of iframe to url
          newIframe.src = url;
          newBlock.appendChild(newIframe);
          break;
      default:
          break;
  }
  //add new block to workspace
  workspace.appendChild(newBlock);
  //set focus on new block
  //add a delete button to new block with id
  const newDeleteButton = document.createElement('button');
  newDeleteButton.className = "del-but";
  //add child Icon to button
  const newDeleteIcon = document.createElement('i');
  newDeleteIcon.className = "fa fa-trash";
  newDeleteButton.appendChild(newDeleteIcon);
  newDeleteButton.onclick = () => {
      const block = document.getElementById(id);
      block.parentNode.removeChild(block);
  }
  newBlock.appendChild(newDeleteButton);
}

