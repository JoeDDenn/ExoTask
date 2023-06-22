import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chatws.css';

const Chatws = () => {
  return (
    <div className="chatws-container">
      <Link to="/Chat" className="chatws-icon">
        <i className="fas fa-comment-alt" style={{ fontSize: '24px' }}></i>
      </Link>
    </div>
  );
};

export default Chatws;
