import React, { useState, useEffect } from 'react';
import RoomCard from '../../components/GameRooms/RoomCard';
import '../JoinRoom/style.css'
import socketUse from '../../utils/socket';

const JoinRoom = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
      socketUse.connect();
      socketUse.recRooms((receivedRooms) => {
        setRooms(receivedRooms);
      });
      socketUse.requestRooms();
      console.log(rooms);

  }, []);

  let roomArr = document.querySelector(`.join-room-container`);
  console.log(roomArr);
  // roomArr.addEventListener(onclick,(e)=>{
  //   console.log(e.target);
  // });

  return (
    <div className="join-room-container">
      <div className="flex-container">
        {Object.keys(rooms).map((roomName) => (
          // <RoomCard key={room.id} roomName = {room.name} room={room} onJoinRoom={handleJoinRoom} />
          <RoomCard key={roomName} room={{name: roomName, count: rooms[roomName].count}} />
        ))}
      </div>
    </div>


  );
  console.log("after the return");

  
  
};

export default JoinRoom;