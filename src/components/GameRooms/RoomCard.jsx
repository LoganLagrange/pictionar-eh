import React from 'react';
import socketUse from '../../utils/socket';

const handleClick = (e,roomName) =>{
  console.log(roomName);
  socketUse.joinRoom(roomName); // supposed to join the room on the socket
}

const RoomCard = ({ room }) => {
  return (
    <div className="room-card" id={room.name}>
      <h3>{room.name}</h3> 
      <p>Players: {room.count}</p>
      <button onClick={(e) => handleClick(e,room.name)}>Join</button>
    </div>
  );
};

export default RoomCard;
