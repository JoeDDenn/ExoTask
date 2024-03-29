import React, { useState } from 'react';
import Card from '../Card/Card';
import { v4 as uuid } from 'uuid';
import './TaskList.css';

const TaskList = (props) => {
const [title, setTitle] = useState(props.title? props.title : "New List");

const [cards, setCards] = useState(props.cards? props.cards : []);


const [newCardText, setNewCardText] = useState('');

const handleTitlechange = (event) => {
  setTitle(event.target.value);
};

  const addCard = () => {
    const newCard = { id: uuid(), title: newCardText, index: cards.length , status: title};
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


        <div className="task-list "
          >
          <div className="task-list-header">
            <input className='TaskListTitle' onChange={handleTitlechange} value={title? title:"New List" }></input>
          </div>

          {cards.length > 0 ? (
            cards.map((card, index) => (
              <Card
              status={card.status}
              key={card.id}
              title={card.title}
              id={card.id}
              description={card.description}
              onDeleteCard={() => cardDelete(card.id)}
              index={card.index}
            />

            ))
          ) : (
            <>
              
            </>
          )}




          <div className="add-card">
            <input type="text" placeholder="Add a card..." value={newCardText} onChange={handleNewCardTextChange} />
            <button onClick={addCard} className="AddCard"><i className='fa fa-plus buttonColored'></i></button>
          </div>
        </div>
        )}


export default TaskList;



