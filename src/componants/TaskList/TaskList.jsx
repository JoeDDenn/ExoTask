import React, { useState } from 'react';

const TaskList = () => {
  const [cards, setCards] = useState([]); // Array of cards to store in the state
  const [newCardText, setNewCardText] = useState(''); // Text of the new card to add

  // Function to handle adding a new card to the state
  const addCard = () => {
    const updatedCards = [...cards, newCardText]; // Create a new array of cards with the new card appended
    setCards(updatedCards); // Update the state with the new array of cards
    setNewCardText(''); // Clear the input field
  };

  // Function to handle updating the input field with the new card text
  const handleNewCardTextChange = (event) => {
    setNewCardText(event.target.value);
  };

  return (
    <div className="task-list">
      <h4 contentEditable>New List</h4>
      {cards.map((card) => (
        <div className="card" key={card}>
          {card}
        </div>
      ))}
      <div className="add-card">
        <input type="text" placeholder="Add a card..." value={newCardText} onChange={handleNewCardTextChange} />
        <button onClick={addCard}>Add</button>
      </div>
    </div>
  );
};

export default TaskList;