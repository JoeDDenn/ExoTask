import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import FormData from 'form-data';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



const Card = ({ description, id, onDeleteCard, index, title, status}) => {

  const descid = "cardId" + id + "desc cardText";
  const titleid = "cardId" + id + "title";

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [recommendedLinks, setRecommendedLinks] = useState([]);

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
      url: 'http://joeddenn-001-site1.itempurl.com/Remove',
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
      const response = await axios.get('http://joeddenn-001-site1.itempurl.com/GetALLinWorkspascce?WorkspasceID=' + defwsid, {
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
          url: 'http://joeddenn-001-site1.itempurl.com/UpdateTask',
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
          url: 'http://joeddenn-001-site1.itempurl.com/CreateTask',
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
    const cardText = document.getElementById(textid).innerHTML;
  
    axios
      .post('http://localhost:8000/recommended', { desc: cardText })
      .then((response) => {
        const recommendations = response.data.recommended;
        console.log("Urls:", recommendations);
        setRecommendedLinks(recommendations);
        setModalOpen(true);
      })
      .catch((error) => {
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
          <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
      <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Recommended Links</ModalHeader>
      <ModalBody>
        <ol>
          {recommendedLinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ol>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
    </div>
  );
};

export default Card;
