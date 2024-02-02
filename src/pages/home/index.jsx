import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../Context/authcontext';
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
  const { user } = useAuth();
  const history = useHistory();

  useEffect(()=>{
    if (!user) {
      history.push('/login');
    }

    API.getAllAnswers()
    .then(answerData=>{
      console.log(answerData);
      setRoom(roomData); //update state variable name to setRoom
    }).catch(err=>{
      console.log(err)
    });
  }, [user, history]);

    return (
      <header style={headerStyle} className="header">
        <h1 style={headingStyle}>Welcome to Pictionar-eh</h1>
        <div>
          {room.map(room=>(
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

  