import React, { useEffect, useState } from 'react';
import DrawingCanvas from '../../components/DrawingCanvas'; // Import the DrawingCanvas component
import ChatBox from '../../components/ChatBox'; // Import the ChatBox component
import Timer from '../../components/Timer';
import "./style.css";
import socketUse from '../../utils/socket'
import API from '../../utils/API'

// var secondsLeft = 75;

// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         // timeEl.textContent = "Timer: " + secondsLeft;

//         if (secondsLeft <= 0) {
//             // Stops execution of action at set interval
//             clearInterval(timerInterval);
//             // Calls function to create and append image
//         }
//     }, 1000);
// }

export default function Game({ currentRoom, setRoom, getHS, userId, setUserId }) {
  
  const [drawer, setDrawer] = useState(false);
  const [drawing, setDrawing] = useState()
  // while(secondsLeft>=0){
    useEffect(() => {
      const handleDrawerUpdate = (drawerStatus) => {
        setDrawer(drawerStatus)
      };
      
      // setTime();
      console.log(secondsLeft);
    socketUse.recDrawer(handleDrawerUpdate);
  })
  
  useEffect(()=>{
    const handleDrawChange = (change) => {
      setDrawing(change)
    };
    
    socketUse.recDraw(handleDrawChange)
  })

  useEffect(()=>{
    getHS(userId);
  }, [getHS])

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
      <Timer/>
      <div style={styles.wordDisplay}>
        {/* <p className='card-word'>Your word is: {props.word}</p> */}
      </div>
      <div style={styles.flexContainer}>
        {drawer ? (
          <div style={styles.canvasContainer} className="canvas-container">
            <DrawingCanvas currentRoom={currentRoom} setRoom={setRoom}/>
          </div>
        ) : (
          <div style={styles.canvasContainer} className="canvas-container">
            {drawing && <img src={drawing} alt="" />}
          </div>
        )}

        <div style={styles.chatContainer} className="chat-container">
          <ChatBox currentRoom={currentRoom} setRoom={setRoom} />
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        {/* Submit Guess {props.name} */}
      </a>
    </section>
  );
}

