import React, { useEffect, useState } from 'react';
import DrawingCanvas from '../../components/DrawingCanvas'; // Import the DrawingCanvas component
import ChatBox from '../../components/ChatBox'; // Import the ChatBox component
import "./style.css";
import socketUse from '../../utils/socket'
import API from '../../utils/API'

export default function Game({ currentRoom, setRoom, getHS, userId, setUserId }) {
  const [drawer, setDrawer] = useState(false);
  const [drawing, setDrawing] = useState()

  useEffect(() => {
    const handleDrawerUpdate = (drawerStatus) => {
      setDrawer(drawerStatus)
    };

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
    <section className='gamepageStyles section'>
      <h2 className='card-title'>PICTIONAR'EH'</h2>
      <div className='wordDisplay'>
        {/* <p className='card-word'>Your word is: {props.word}</p> */}
      </div>
      <div className='flexContainer'>
        {drawer ? (
          <div className='canvasContainer canvas-container'>
            <DrawingCanvas currentRoom={currentRoom} setRoom={setRoom}/>
          </div>
        ) : (
          <div className='canvasContainer canvas-container'>
            {drawing && <img src={drawing} alt="" />}
          </div>
        )}

        <div className='chatContainer chat-container'>
          <ChatBox currentRoom={currentRoom} setRoom={setRoom} />
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        {/* Submit Guess {props.name} */}
      </a>
    </section>
  );
}
