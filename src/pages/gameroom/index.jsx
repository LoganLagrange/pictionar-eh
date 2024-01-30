import React from 'react';
import DrawingCanvas from '../../components/DrawingCanvas'; // Import the DrawingCanvas component
import ChatBox from '../../components/ChatBox'; // Import the ChatBox component
import "./style.css";

export default function Game(props) {
  const styles = {
    gamepageStyles: {
      background: 'red',
      display: 'flex', // Add display: flex to the gamepageStyles
      flexDirection: 'column', // Use flex column layout
      alignItems: 'center',
      justifyContent: 'center', // Center both horizontally and vertically
      minHeight: '100vh', // Set min height to 100% of viewport height
      padding: '20px',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'flex-start', // Adjusted for even spacing
      alignItems: 'flex-start',
      width: '100%', // Set width to 100%
      maxWidth: '800px', // Optionally set a maximum width for content
    },
    canvasContainer: {
      width: '400px', // Set width of the canvas container
      marginRight: '50px', // Space between canvas and chat
    },
    chatContainer: {
      flex: '1', // Allow the chat container to grow to fill available space
      minWidth: '300px', // Set minimum width for chat container
      overflow: 'hidden', // Hide overflow to prevent it from pushing content
    },
    wordDisplay: {
      textAlign: 'center', // Center align the word display
      marginBottom: '20px', // Space between word display and canvas/chat
    },
  };

  return (
    <section style={styles.gamepageStyles} className="section">
      <h2 className='card-title'>PICTIONAR'EH'</h2>
      <div style={styles.wordDisplay}>
        <p className='card-word'>Your word is: {props.word}</p>
      </div>
      <div style={styles.flexContainer}>
        <div style={styles.canvasContainer} className="canvas-container">
          <DrawingCanvas />
        </div>
        <div style={styles.chatContainer} className="chat-container">
          <ChatBox />
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        Submit Guess {props.name}
      </a>
    </section>
  );
}