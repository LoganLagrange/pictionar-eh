import React from 'react';
import socketUse from '../../utils/socket';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({ room, currentRoom, setRoom }) => {
  const navigate = useNavigate();

  const handleClick = (roomName, navigate) =>{
    console.log(roomName);
    socketUse.joinRoom(roomName); // supposed to join the room on the socket
    setRoom(roomName)
    navigate('/game')
  }

  return (
    <div className="room-card" id={room.name}>
      <h3>{room.name}</h3> 
      <p>Players: {room.count}</p>
      <button onClick={(e) => handleClick(room.name, navigate)}>Join</button>
    </div>
  );
};

export default RoomCard;
