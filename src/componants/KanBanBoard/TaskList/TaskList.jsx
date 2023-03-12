import React, { useState } from 'react';
import Card from '../Card/Card';

const TaskList = () => {
  const [cards, setCards] = useState([]);
  const [newCardText, setNewCardText] = useState('');

  const addCard = () => {
    const newCard = { id: Date.now(), text: newCardText };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    setNewCardText('');
  };

  const cardDelete = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  const handleNewCardTextChange = (event) => {
    setNewCardText(event.target.value);
  };

  return (
    <div className="task-list">
      <div className="task-list-header">
        <h4 contentEditable>New List</h4>
      </div>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          onDeleteCard={() => cardDelete(card.id)}
        />
      ))}
      <div className="add-card">
        <input type="text" placeholder="Add a card..." value={newCardText} onChange={handleNewCardTextChange} />
        <button onClick={addCard} className="AddCard"><i className='fa fa-plus buttonColored'></i></button>
      </div>
    </div>
  );
};

export default TaskList;