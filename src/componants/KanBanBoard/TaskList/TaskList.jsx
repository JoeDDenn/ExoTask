import React, { useState } from 'react';
import Card from '../Card/Card';

const TaskList = () => {
  const [cards, setCards] = useState([]); // Array of cards to store in the state
  const [newCardText, setNewCardText] = useState(''); // Text of the new card to add

  // Function to handle adding a new card to the state
  const addCard = () => {
    const updatedCards = [...cards, newCardText]; // Create a new array of cards with the new card appended
    setCards(updatedCards); // Update the state with the new array of cards
    setNewCardText(''); // Clear the input field
  };

  // Function to handle deleting a card from the state
  const cardDelete = (cardId) => {
    const updatedCards = cards.filter((card, index) => index !== cardId); // Create a new array of cards with the specified card removed
    setCards(updatedCards); // Update the state with the new array of cards
  };

  // Function to handle updating the input field with the new card text
  const handleNewCardTextChange = (event) => {
    setNewCardText(event.target.value);
  };

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h4 contentEditable>New List</h4>
      </div>
      {/* Use the Card component instead of the div */}
      {cards.map((card, index) => (
        <Card key={index} id={index} text={card} onDeleteCard={() => cardDelete(index)} />
      ))}
      <div className="add-card">
        <input type="text" placeholder="Add a card..." value={newCardText} onChange={handleNewCardTextChange} />
        <button onClick={addCard} className="AddCard"><i className='fa fa-plus buttonColored'></i></button>
      </div>
    </div>
  );
};

export default TaskList;