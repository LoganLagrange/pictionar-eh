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
      const handleDrawerUpdate = (drawerStatus) => {
        setDrawer(drawerStatus)
      };
      
      // setTime();
      // console.log(timeLeft);
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

  return (
    <section className="gamepageStyles section">
      <h2 className='card-title'>PICTIONAR'EH'</h2>
      <Timer timeLeft={timeLeft} setTimer={setTimer}/>
      <div className='wordDisplay'>
        {/* <p className='card-word'>Your word is: {props.word}</p> */}
      </div>
      <div className='flexContainer'>
        {drawer ? (
          <div className='canvasContainer canvas-container'>
            <DrawingCanvas currentRoom={currentRoom} setRoom={setRoom}/>
          </div>
        ) : (
          <div className='viewingContainer viewing-container'>
            {drawing && <img src={drawing} alt="" />}
          </div>
        )}

        <div className='chatContainer chat-container'>
          <ChatBox currentRoom={currentRoom} setRoom={setRoom} timeLeft={timeLeft} setTimer={setTimer} />
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        {/* Submit Guess {props.name} */}
      </a>
    </section>
  );
}