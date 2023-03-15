import React, { useState } from 'react';
import AddBlock from '../../WorkSpace/AddBlock';

const Addimg = () => {

  const handleClick = (block) => {
    AddBlock(block.type, block, block.className);
  };

  return (
    <div className="ComponentList-item-title">
      <button className="ComponentList-item-title-button" onClick={handleClick(block)}>
        add media
      </button>
    </div>
  );
};

export default Addimg;


const block = {
    type: 'image',
    className: 'WSImage',
    data :{
      file:{
        url: ''
      }
    }
}