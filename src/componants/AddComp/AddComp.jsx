import React, { useState } from 'react';
import './AddComp.css';
import SelectMenuWindow from './SelectMenu';


const AddComp = () => {
  const [showSelect, setshowSelect] = useState(false);

  const handleSelectClick = () => {
    setshowSelect(!showSelect);
  };

  return (
    <div className="Comp-select-container">
      <button className="chat-icon" onClick={handleSelectClick}><i className="fa fa-robot"></i></button>
      {showSelect && <SelectMenuWindow />}
    </div>
  );
};

export default AddComp;
