import React, { useEffect, useState } from 'react';
import DrawingCanvas from '../../components/GameFunctions/DrawingCanvas'; // Import the DrawingCanvas component
import ChatBox from '../../components/GameFunctions/ChatBox'; // Import the ChatBox component
import Timer from '../../components/GameFunctions/Timer';
import "./style.css";
import socketUse from '../../utils/socket'
import API from '../../utils/API'


export default function Game({ currentRoom, setRoom, getHS, userId, setUserId }) {

  const [drawer, setDrawer] = useState(false);
  const [drawing, setDrawing] = useState()
  const [timeLeft, setTimer] = useState('');

  // while(secondsLeft>=0){
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const handleDrawerUpdate = (drawerStatus) => {
        setDrawer(drawerStatus)
      };
      const handleWordUpdate = word => {
        localStorage.setItem('selectedWord', word);
      }

      // setTime();
      // console.log(timeLeft);
      socketUse.recDrawer(handleDrawerUpdate);
      socketUse.recWord(handleWordUpdate);

      const handleDrawChange = (change) => {
        setDrawing(change)
      };

      socketUse.recDraw(handleDrawChange)
    }


    return () => {
      isMounted = false
      // socketUse.leaveRoom(currentRoom);
    }
  })

  useEffect(() => {
    getHS(userId);
  }, [getHS])

  return (
    <section className="gamepageStyles section">
      <h2 className='card-title'>PICTIONAR'EH'</h2>
      <Timer timeLeft={timeLeft} setTimer={setTimer} />
      <h2 className='card-title'>{`Your score is: ${localStorage.getItem('currentScore')}`}</h2>
      {drawer ? (
        <div className='wordDisplay'>
          <h2 className='card-title'>{`The word to draw is: ${localStorage.getItem('selectedWord')}`}</h2>
        </div>
      ) : (
        <div className='wordDisplay'>
          
        </div>
      )}
      <div className='flexContainer'>
        {drawer ? (
          <>

            <div className='canvasContainer canvas-container'>
              <DrawingCanvas currentRoom={currentRoom} setRoom={setRoom} />
            </div>
          </>
        ) : (
          <div className='viewingContainer viewing-container'>
            {drawing && <img src={drawing} alt="" />}
          </div>
        )}

        <div className='chatContainer chat-container'>
          <ChatBox currentRoom={currentRoom} setRoom={setRoom} timeLeft={timeLeft} />
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        {/* Submit Guess {props.name} */}
      </a>
    </section>
  );
}