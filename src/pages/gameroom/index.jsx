import React from 'react';
import DrawingCanvas from '../../components/DrawingCanvas'; // Import the DrawingCanvas component
import ChatRoom from '../../components/ChatRoom'; // Import the chatroom component
import "./style.css"

export default function Game(props) {
  const styles = {
    gamepageStyles: {
      background: 'red',
    },
  };

  return (
    <section style={styles.gamepageStyles} className="section">
      <div>
        <h2 className='card-title'>PICTIONAR'EH'</h2>
        <div>
          <p className='card-word'>Your word is: {props.word} </p>
          
          {/* Replace the canvas element with the DrawingCanvas component */}
          <DrawingCanvas />
          {/* <ChatRoom/> */}

          <article className='card-chat'> Guess the drawn image here </article>
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        Submit Guess {props.name}
      </a>
    </section>
  );
}