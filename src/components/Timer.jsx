import React from 'react';
import { useState, useEffect } from 'react';
import socketUse from '../utils/socket';


const Timer = ({ timeLeft, setTimer }) => {
  

  useEffect(() => {
    let isMounted = true;
    // Activate socket method for listening for incoming messages
    socketUse.RecTimer((newTimer) => {
      if (isMounted) {
        setTimer(newTimer);
        console.log("time left : " + timeLeft);
      }
    });
    return () => {
      console.log("Am I here?");
      isMounted = false;
    }

  }, []);


  return (
    <div className="timer">
      <h2 className='card-title'> Time Left : {timeLeft}</h2>
    </div>
  );

}

export default Timer;