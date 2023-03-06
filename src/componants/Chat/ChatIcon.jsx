import React from 'react';
import './Chatbot.css';

const ChatIcon = () => {
  return (
    //add handleClick prop to button 
    <button className="chat-icon" onClick={this.handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm-1.707 16.293c-.391.391-1.023.391-1.414 0l-2.586-2.586c-.391-.391-.391-1.023 0-1.414l.041-.041c.391-.391 1.023-.391 1.414 0l2.121 2.121 4.793-4.793c.391-.391 1.023-.391 1.414 0l.041.041c.391.391.391 1.023 0 1.414l-6.207 6.207z"/>
      </svg>
    </button>
  );
};

export default ChatIcon;
