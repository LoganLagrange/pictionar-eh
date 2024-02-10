import React from 'react';
import { useState, useEffect } from 'react';
import socketUse from '../utils/socket';


const Timer = () => {
    const [timeLeft, setTimer] = useState('');
    const [prevTime, setTimers] = useState([]);


    // let deadline = "December, 31, 2022";
    // let deadline = Date.now();

    // const getTime = () => {
        
    //     let time =   Date.now() - (Date.parse(deadline) + 30000);
    //     if(time<=0 || time>=30){
    //     time =   Date.now() - (Date.parse(deadline) +30000);
            
    //         // deadline = "December, 31, 2022";
    //     }
    //     // const time = (Date.now() + 3000) - Date.now();

    //     setSeconds(Math.floor((time / 1000) % 60));
    //     // const time = Date.parse(deadline) - Date.now();
    //     // remainingTime--;
    //     // setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    //     // setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    //     // setMinutes(Math.floor((time / 1000 / 60) % 60));
    //     // setSeconds(Math.floor((time / 1000) % 60));
    // };

    // useEffect(() => {
    //     // const interval = setInterval(() => getTime(remainingTime), 1000);
    //     socketUse.RecTimer((newTimer)=>{
    //         setTimers(newTimer);
    //         setTimers([...prevTime, timeLeft]);
    //         setTimer(timeLeft);
    //     })
    //     // return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        let isMounted = true;
        // Activate socket method for listening for incoming messages
        socketUse.RecTimer((newTimer) => {
          if(isMounted) {
            console.log("Am I here first??");
            setTimers(newTimer);
            console.log(typeof(newTimer));
            setTimers([...prevTime, timeLeft]);
            console.log("time left : " + timeLeft);
            setTimer(timeLeft);
            // if (messagesContainerRef.current) {
            //   // Scroll to the bottom of the messages when new messages are added
            //   messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
            // }
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