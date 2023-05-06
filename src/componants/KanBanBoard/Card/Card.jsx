import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import FormData from 'form-data';


const Card = ({ description, id, onDeleteCard, index, title, status}) => {

  const descid = "cardId" + id + "desc cardText";
  const titleid = "cardId" + id + "title";

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const textid = uuid();

  const handleDeleteCard = () => {

    const token = localStorage.getItem('token');
    const cardId = id;
    const defwsid = localStorage.getItem('defwsid')
    const WorkSpasceID = defwsid; //hardcoded for now
    const data = new FormData();
    data.append('WorkSpasceID', WorkSpasceID);
    data.append('TaskID', cardId);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://localhost:7042/Remove',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    onDeleteCard(id);
  };

  const handleSave = () => {
    console.log('save');
    const cardText = description
    const cardTitle = title
    const cardId = id;
    const cardStatus = status;
    const cardIndex = index;

    //get all in workspace
    const workspace = async (id) => {
      const token = localStorage.getItem('token');
      const defwsid = localStorage.getItem('defwsid')
      const response = await axios.get('https://localhost:7042/GetALLinWorkspascce?WorkspasceID=' + defwsid, {
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      )
      const tasklist = response.data.taskDtos;
      //if task exists, update it
      const task = tasklist.find(task => task.id === id);
      console.log(task);
      if (task) {
        const cardTitle = document.getElementById(titleid).innerHTML;
        const cardText = document.getElementById(textid).innerHTML;
        console.log(cardTitle);
        console.log(cardText);

        let data = new FormData();
        const defwsid = localStorage.getItem('defwsid')
        data.append('WorkSpasceID', defwsid);
        data.append('Name', cardTitle? cardTitle: 'untitled');
        data.append('Descrpiton', cardText? cardText: 'no description');
        data.append('statues', cardStatus? cardStatus: 'todo');
        data.append('taskID', cardId);

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://localhost:7042/UpdateTask',
          headers: { 
            'Authorization': 'Bearer ' + token,
          },
          data : data
        };
        

        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
      //if task doesn't exist, create it
      if (!task) {
        const cardTitle = document.getElementById(titleid).innerHTML;
        const cardText = document.getElementById(textid).innerHTML;
        console.log(cardTitle);
        console.log(cardText);


        const defwsid = localStorage.getItem('defwsid')
        let data = new FormData();
        data.append('WorkSpasceID', defwsid);
        data.append('Name', cardTitle? cardTitle: 'untitled');
        data.append('Descrpiton', cardText? cardText: 'no description');
        data.append('statues', cardStatus? cardStatus: 'todo');

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://localhost:7042/CreateTask',
          headers: { 
            'Authorization': 'Bearer ' + token,
          },
          data : data
        };
        

        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    workspace(cardId);
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
          <div className="TaskCard" id={id}>
            <div className="card-header">
              <h4 contentEditable id={titleid}>{title}</h4>
            </div>
            <div className="card-body">
              <p contentEditable className="cardText" id={textid} >{description}</p>
            </div>
            <div className="card-footer">
              <button className="Save" onClick={handleSave}>
                <i className='fa fa-save'></i>
              </button>

              <button className="help" onClick={handleHelp}>
                <i className='fa fa-question'></i>
              </button>
              <button className="deleteCard" onClick={handleDeleteCard}>
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </div>
    </div>
  );
};

export default Card;
