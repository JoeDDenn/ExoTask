import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const Card = ({ description, id, onDeleteCard, index, title}) => {

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const textid = uuid();

  const handleDeleteCard = () => {
    onDeleteCard(id);
  };

  const handleHelp = () => {
    //get div containing the card
    const cardText = document.getElementById(textid).innerHTML;
    //get the card body of the card
    

    const taskdesc = "i'm working on " + cardText + " ,suggest five resources to help with this, place a <div> at the start of the message with class of 'messageHeader' followed by a numbered list of <div>, each with links in an <a> tag with the class 'messageText' and describe each link briefly in a <p>";
    axios.post('http://localhost:8000/answer', {
        question: JSON.stringify(taskdesc)
      })
      .then(response => {
        setResponse(response.data.answer);
        let message = document.getElementsByClassName('message-text')[0];
        const cardBody = document.getElementsByClassName('card-body')[0];
        //if message div exists, remove it
        if (message) {
          message.remove();
        }
        //create message div
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
        
        messageWrapper.innerHTML = `<button class="close messageClose"> X </button>`;
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

      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div className="TaskCard" id={id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="card-header">
              <h4 contentEditable>{title}</h4>
            </div>
            <div className="card-body">
              <p contentEditable className="cardText" id={textid} >{description}</p>
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
