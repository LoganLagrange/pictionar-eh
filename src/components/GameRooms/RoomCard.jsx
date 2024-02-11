import React, { useEffect } from 'react';
import socketUse from '../../utils/socket';
import { useNavigate } from 'react-router-dom';
import CanadaFlag from '../../assets/Canada.png'

const RoomCard = ({ room, currentRoom, setRoom }) => {
  const navigate = useNavigate();

  const handleClick = (roomName, navigate) =>{
    console.log(roomName);
    
    setRoom((prevRoom) => {
      socketUse.joinRoom(roomName); // supposed to join the room on the socket
      navigate('/game')
      return(roomName)
    })
    console.log("roombox room:", currentRoom)
  }

  useEffect(()=> {
    
  }, [currentRoom, navigate])

  return (
    <div className="room-card" id={room.name}>
      <img src={CanadaFlag} alt="CanadaFlag" className="canadian-flag" />
      <h3>{room.name}</h3> 
      <p>Players: {room.count}</p>
      <button onClick={(e) => handleClick(room.name, navigate)}>Join</button>
    </div>
  );
};

export default RoomCard;
