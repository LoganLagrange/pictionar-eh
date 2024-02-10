import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authcontext';
import "./style.css"
import API from "../../utils/API"
import JoinRoom from '../JoinRoom';
import RoomCard from '../../components/GameRooms/RoomCard';
import Pictionarehlogo from '../../assets/Pictionar-EH.png'

export default function Homepage() {
  const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    padding: '20px',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const [room, setRoom] = useState([]); //To declare room state variable
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    // if (!user) {
    //   navigate('/login');
    // }

    // API.getAllAnswers()
    // .then(answerData=>{
    //   console.log(answerData);
    //   setRoom(roomData); //update state variable name to setRoom
    // }).catch(err=>{
    //   console.log(err)
    // });
  }, [user, navigate]);

    return (
      <header style={headerStyle} className="header">
        <img src={Pictionarehlogo} alt="pictionarehlogo" className="pictionareh-logo" />
        <h1 className={headingStyle}>Welcome to Pictionar-eh!🍁</h1>
        <div>
          {room.map(room=>(
          <RoomCard key={room.id} name={room}/>
          ))}
        <Link to="/join-room">
          <button>Join Existing Room</button>
        </Link>
        <Link to="/create-room">
          <button className='button-gap'>Create New Room</button>
        </Link>
      </div>
      </header>
    );
  }

  