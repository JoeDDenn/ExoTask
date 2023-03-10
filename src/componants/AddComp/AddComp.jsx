import React, { useState } from 'react';
import './AddComp.css';
import SelectMenuWindow from './SelectMenu';


const AddComp = () => {
  const [showSelect, setshowSelect] = useState(false);

  const handleSelectClick = () => {
    setshowSelect(!showSelect);
    //add the chat-icon-active class to the button when the select menu is open
    const chatIcon = document.querySelector('.chat-icon');
    if (showSelect) {
        chatIcon.classList.remove('chat-icon-active');
        }
    else {
        chatIcon.classList.add('chat-icon-active');
    }
    
  };

  return (
    <div className="Comp-select-container">
      <button className="chat-icon" onClick={handleSelectClick}><i className="fa fa-plus"></i></button>
      {showSelect && <SelectMenuWindow />}
    </div>
  );
};

export default AddComp;
