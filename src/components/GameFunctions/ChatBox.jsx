import React, { useState, useEffect, useRef } from 'react';
import "../../pages/gameroom/style.css"; // Importing CSS styles
import socketUse from '../../utils/socket';
import API from '../../utils/API';

export default function ChatBox({ currentRoom, setRoom, timeLeft, setTimer}) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null); // Reference to the messages container

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      // Initialize current score
      localStorage.setItem('currentScore', 0)
      // const timeLeftRef = useRef(timeLeft);

      // Grab current timer value from state
      // const timerVal = timeLeft

      // Wrapper function to allow for callback
      const recMessageTimer = () => {
        // Activate socket method for listening for incoming messages
        console.log(timeLeft);
        
        socketUse.RecMessage(setMessages)

        if (messagesContainerRef.current) {
          // Scroll to the bottom of the messages when new messages are added
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
        console.log(messages)
      }

      recMessageTimer();
    }

    return () => {
      isMounted = false;
      socketUse.leaveRoom(currentRoom);
    }

  },[]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  // for sending any thing on a message send
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hello submit message !");
    if (message.trim()) {
      // Send message to socket server
      socketUse.sendMessage(currentRoom, message)

      // setTimerVal(timeLeft);

      // setMessages(prevMessages => [...prevMessages, {message: message}]);
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="messages-container" ref={messagesContainerRef}>
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index}>{typeof msg.message === 'string' ? msg.message : ''}</p>
          ))}
        </div>
      </div>
      <div className="chat-form-container">
        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button type="submit" className="chat-send-button">Send</button>
        </form>
      </div>
    </div>
  );
}