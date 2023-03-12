import React, { useState } from 'react';

const Addimg = () => {
  const handleSelectClick = () => {
    // open file select
    const fileSelect = document.createElement('input');
    fileSelect.type = 'file';
    fileSelect.accept = 'image/*,video/*';
    fileSelect.click();
    fileSelect.onchange = () => {
      const file = fileSelect.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const workspace = document.getElementById('workspace');
        const newBlock = document.createElement('div');
        newBlock.className = 'Block';
        if (file.type.includes('image')) {
          const newImg = document.createElement('img');
          newImg.src = reader.result;
          newBlock.appendChild(newImg);
        } else if (file.type.includes('video')) {
          const newVideo = document.createElement('video');
          newVideo.src = reader.result;
          newVideo.controls = true;
          newBlock.appendChild(newVideo);
        }
        workspace.appendChild(newBlock);
      };
    };
  };

  return (
    <div className="ComponentList-item-title">
      <button className="ComponentList-item-title-button" onClick={handleSelectClick}>
        add media
      </button>
    </div>
  );
};

export default Addimg;
