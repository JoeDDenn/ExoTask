import React from 'react'
import './Chatpage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Message() {
    const [message , setMessage] = React.useState([]);

    const handleGetMessages = async () => {
        const token = localStorage.getItem('token');
        const workSpacseId = localStorage.getItem('defwsid');

        const response = await axios.get(`https://localhost:7042/api/Message/GetMessage?WorkSpacseId=${workSpacseId}`,{
            headers: {
                'authorization': `Bearer ${token}`,
            }
        }
        )
        const data = await response.data;
        setMessage(data);
    };

    React.useEffect(() => {
        handleGetMessages();
        
    },[])

  return (
    <div className="chat-box">
        {message.map((item) => {
            if(item.senderName === localStorage.getItem('userName')){
                return <UserMessage sender={item.senderName} message={item.content} timestamp={item.timestamp}/>
            }else{
                return <OtherMessage sender={item.senderName} message={item.content} timestamp={item.timestamp}/>
            }
        })}
    </div>
  )
}

export default Message



function UserMessage(props) {
  return (
    <div className="chat-r">
        <div className="sp"></div>
        <div className="mess mess-r">
            <p>
                {props.sender} : {props.message}
            </p>
            <div className="check">
                <span>{props.timestamp}</span>

            </div>
        </div>
    </div>
  )
}


function OtherMessage(props) {
  return (
    <div className="chat-l">
        <div className="mess">
            <p>
                {props.sender} : {props.message}
            </p>
            <div className="check">
                <span>{props.timestamp}</span>
            </div>
        </div>
        <div className="sp"></div>
    </div>
  )
}

