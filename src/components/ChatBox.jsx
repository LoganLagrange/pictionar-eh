import React, { useState, useEffect, useRef } from 'react';
import "../pages/gameroom/style.css"; // Importing CSS styles

export default function ChatBox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null); // Reference to the messages container

  useEffect(() => {
    

    if (messagesContainerRef.current) {
      // Scroll to the bottom of the messages when new messages are added
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="messages-container" ref={messagesContainerRef}>
        <div className="messages">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
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