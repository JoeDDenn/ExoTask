import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';
import axios from 'axios';

const Card = ({ text, id, onDeleteCard, index }) => {

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const handleDeleteCard = () => {
    onDeleteCard(id);
  };

  const handleHelp = () => {
    const cardText = document.getElementsByClassName('cardText')[0].innerHTML;
    const taskdesc = "i am working on  " + cardText + " , can you suggest some resources to help with this, please format the answer as a list of links with line breaks between each link";
    axios.post('http://localhost:8000/answer', {
        question: JSON.stringify(taskdesc)
      })
      .then(response => {
        setResponse(response.data.answer);
        let message = document.getElementsByClassName('message-text')[0];
        const cardBody = document.getElementsByClassName('card-body')[0];
  
        if (!message) {
          message = document.createElement('div');
          message.className = 'message-text';
          cardBody.appendChild(message);
        }
  
        message.innerHTML = response.data.answer;
  
        let messageWrapper = document.getElementsByClassName('message')[0];
        if (!messageWrapper) {
          messageWrapper = document.createElement('div');
          messageWrapper.className = 'message';
          cardBody.appendChild(messageWrapper);
        }
  
        messageWrapper.innerHTML = `<button class="close">X</button>`;
        messageWrapper.appendChild(message);
  
        const close = document.getElementsByClassName('close')[0];
        close.addEventListener('click', closeMessage);
  
        messageWrapper.style.display = 'block';
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  };
  
  
  const closeMessage = () => {
    const message = document.getElementsByClassName('message-text')[0];
    if (message) {
      message.innerHTML = '';
    }
    const messageWrapper = document.getElementsByClassName('message')[0];
    if (messageWrapper) {
      messageWrapper.style.display = 'none';
    }
  };
  

  return (
    <div>
      <div className="message"></div>

      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div className="TaskCard" id={id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="card-header">
              <h4 contentEditable>{text}</h4>
            </div>
            <div className="card-body">
              <p contentEditable className="cardText">{input}</p>
            </div>
            {provided.placeholder}
            <div className="card-footer">
              <input type="checkbox" className="checkbox" />
              <button className="help" onClick={handleHelp}>
                <i className='fa fa-question'></i>
              </button>
              <button className="deleteCard" onClick={handleDeleteCard}>
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default Card;
