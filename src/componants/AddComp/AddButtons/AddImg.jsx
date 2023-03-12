import React, { useState } from 'react';

const Addimg = () => {
  const handleSelectClick = () => {
    // open file select
    const fileSelect = document.createElement('input');
    fileSelect.type = 'file';
    fileSelect.accept = 'image/*';
    fileSelect.click();
    fileSelect.onchange = () => {
      const file = fileSelect.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const workspace = document.getElementById('workspace');
        const newBlock = document.createElement('div');
        newBlock.className = 'Block';
        const newImg = document.createElement('img');
        newImg.src = reader.result;
        newBlock.appendChild(newImg);
        workspace.appendChild(newBlock);
      };
    };
  };

  return (
    <div className="ComponentList-item-title">
      <button className="ComponentList-item-title-button" onClick={handleSelectClick}>
        image
      </button>
    </div>
  );
};

export default Addimg;