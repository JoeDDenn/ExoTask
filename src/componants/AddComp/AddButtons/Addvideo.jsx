import React, { useState } from 'react';
import AddBlock from '../../WorkSpace/AddBlock';

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
