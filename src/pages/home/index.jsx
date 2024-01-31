import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
import API from "../../utils/API"
import JoinRoom from '../JoinRoom';
import RoomCard from '../../components/GameRooms/RoomCard';

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

  const [User, setCreateRoom, setJoinRoom] = useState([]);
  const [room, setRoom] = useState([]); //To declare room state variable
  useEffect(()=>{
    API.getAllAnswers()
    .then(answerData=>{
      console.log(answerData);
      setRoom(roomData); //update state variable name to setRoom
    }).catch(err=>{
      console.log(err)
    });
  }, []);
    return (
      <header style={headerStyle} className="header">
        <h1 style={headingStyle}>Welcome to Pictionar-eh</h1>
        <div>
          {room.map(join=>(
          <RoomCard key={room.id} name={room}/>
          ))}
        <Link to="/join-room">
          <button>Join Existing Room</button>
        </Link>
        <Link to="/create-room">
          <button>Create New Room</button>
        </Link>
      </div>
      </header>
    );
  }

  