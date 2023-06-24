import React from 'react';
import './Chatpage.css';
import NavWorkSpcae from '../Nav/NavWorkSpcae';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../Side-bar/SideBar';
import axios from 'axios';
import formdata from 'form-data';
import Message from './Message';

const Chatpage = () => {
  const [userMessages, setUserMessages] = React.useState([]);

  const handleSend = async () => {
    const messagesend = document.getElementById('messageSend').value;
    const token = localStorage.getItem('token');
    const workSpacseId = localStorage.getItem('defwsid');

    const body = new FormData();
    body.append('Content', messagesend);
    body.append('WorkspaceId', workSpacseId);

    const response = await axios.post(
      'http://joeddenn-001-site1.itempurl.com/api/Message/SendMessage',
      body,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
  };

  return (
    <div>
      <NavWorkSpcae />
      <SideBar />
      <div className="container mr-5 chat-container">
        <div className="chat">
          <div className="chatBox">
            <Message />
          </div>
          <div className="chat-footer">
            <textarea id="messageSend" placeholder="Type a message"></textarea>
            <button className="btn btncustommm" onClick={handleSend}>
              <i className="fa fa-paper-plane cusomeimgsend" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;