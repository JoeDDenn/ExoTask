import React from 'react';
import './Card.css';

// New Card component
const Card = ({ text, id, onDeleteCard }) => {

  // Function to handle deleting a card
  const handleDeleteCard = () => {
    onDeleteCard(id);
  };

  return (
    <div className="TaskCard"  id={id}>
      <div className="card-header">
        <h4 contentEditable>{text}</h4>
      </div>
      <div className="card-body">
        <p contentEditable></p>
      </div>
      {/* add a checkbox to card*/}
      <div className="card-footer">
        <input type="checkbox" className="checkbox" />
        {/* button to delete card */}
        <button className="deleteCard" onClick={handleDeleteCard}>
          <i className='fa fa-trash'></i>
        </button>
      </div>
    </div>
  );
};

export default Card;