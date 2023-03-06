import React, { useState } from 'react';
import './Chatbot.css';

import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [showChat, setShowChat] = useState(true);

  const handleChatClick = () => {
    setShowChat(!showChat);
    console.log('Chatbot clicked');
  };

  return (
    <div className="chatbot-container">
      <button className="chat-icon" onClick={handleChatClick}></button>
      {showChat && <ChatWindow />}
    </div>
  );
};

export default Chatbot;
