import React from 'react';
import "./style.css"

export default function Card(props) {
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
          <canvas className='card-canvas'>
            <p>Your turn: {props.user}, draw {props.word} </p>
          </canvas>
          <article className='card-chat'> Guess the drawn image here </article>
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        Submit Guess {props.name}
      </a>
    </section>
  );
}
