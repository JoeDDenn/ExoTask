import React from 'react';
import './Chatbot.css';
import axios from 'axios';


class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      messages: [],
      userInput: '',
      isLoading: false,
      error: null
    };
  }
toggleWindow = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleMessageSend = () => {
    // Get username from local storage
    const username = localStorage.getItem('username');
  
    this.setState({ isLoading: true });
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        {
          text: username || 'User' + ': ' + this.state.userInput,
          isUser: true,
        },
      ],
      userInput: '',
    }));
  
    axios
      .post('http://localhost:8000/answer', {
        question: this.state.userInput,
      })
      .then(response => {
        this.setState(prevState => ({
          messages: [
            ...prevState.messages,
            {
              text: 'ExoBot: ' + response.data.answer,
              isUser: false,
            },
          ],
          isLoading: false,
        }));
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
        console.log('Error from chatbot:', error);
      });
  };
  
handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    const { isOpen, messages, userInput, isLoading, error } = this.state;

    return (
      <div className="chat-window">
        {isOpen && (
          <div className="chat-box">
            <div className="message-list">
                {messages.map((message, index) => (
                  <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
        )}
            <div className="chat-input">
              <input type="text" value={userInput} onChange={this.handleInputChange} />
              <button onClick={this.handleMessageSend}>Send</button>
            </div>
      </div>
    );
  }
}

export default ChatWindow;