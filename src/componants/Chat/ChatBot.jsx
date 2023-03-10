import React, { useState } from 'react';
import './Chatbot.css';

import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chatbot-container">
      <button className="chat-icon" onClick={handleChatClick}><i className="fa fa-robot"></i></button>
      {showChat && <ChatWindow />}
    </div>
  );
};

export default Chatbot;