import React from 'react';
import { v4 as uuid } from 'uuid';


const Addimg = () => {

  const addMediaBlock = () => {
    const block = {
      type: 'image',
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
        Add image
      </button>
    </div>
  );
};

export default Addimg;


function AddBlock(type, block, className) {
  //find workspace
  const workspace = document.getElementById('workspace');
  //create new block
  const newBlock = document.createElement('div');
  newBlock.className = 'Block';
  const id = (newBlock.id = uuid());
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
      //add an image to the new block
      const newImage = document.createElement('img');
      if (block.data.file.url === '') {
        //ask the user for the image URL
        const fileSelect = document.createElement('input');
        fileSelect.type = 'file';
        fileSelect.accept = 'image/*';
        fileSelect.click();
        fileSelect.onchange = () => {
          const file = fileSelect.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            newImage.src = reader.result;
          };
        };
      } else {
        //set the image URL
        newImage.src = block.data.file.url;
      }

      newImage.className = className + ' WSImage';
      newBlock.appendChild(newImage);
      break;
    case 'video':
      //add a video to the new block
      const newVideo = document.createElement('video');
      newVideo.controls = true;
      if (block.data.file.url === '') {
        //ask the user for the video URL
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
      } else {
        //set the video URL
        newVideo.src = block.data.file.url;
      }
      newVideo.className = className;
      newBlock.appendChild(newVideo);
      break;
    case 'webpage':
      const newIframe = document.createElement('iframe');
      newIframe.className = className;
      // ask the user for the URL
      const url = block.data.url;
      // set the src of the iframe to the URL
      newIframe.src = url;
      newBlock.appendChild(newIframe);
      break;
    default:
      break;
  }
  //add the new block to the workspace
  workspace.appendChild(newBlock);
  //set focus on the new block
  //add a delete button to the new block with id
  const newDeleteButton = document.createElement('button');
  newDeleteButton.className = 'del-but';
  //add child Icon to button
  const newDeleteIcon = document.createElement('i');
  newDeleteIcon.className = 'fa fa-trash';
  newDeleteButton.appendChild(newDeleteIcon);
  newDeleteButton.onclick = () => {
    const block = document.getElementById(id);
    block.parentNode.removeChild(block);
  };
  newBlock.appendChild(newDeleteButton);
}


