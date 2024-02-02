import React, { useState, useEffect } from 'react';
import RoomCard from '../../components/GameRooms/RoomCard';
import '../JoinRoom/style.css'
import socketUse from '../../utils/socket';

const JoinRoom = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 1', description: 'Description 1', players:[]},
    { id: 2, name: 'Room 2', description: 'Description 2', players:[]},
    { id: 3, name: 'Room 3', description: 'Description 3', players:[]},
  ]);

  useEffect(() => {
      socketUse.connect();
      socketUse.recRooms();
      socketUse.requestRooms((receivedRooms) => {
        setRooms(receivedRooms);
      });
    
  }, []);

  let roomArr = document.querySelector(`.join-room-container`);
  console.log(roomArr);
  // roomArr.addEventListener(onclick,(e)=>{
  //   console.log(e.target);
  // });

  return (
    <div className="join-room-container">
      <div className="flex-container">
        {rooms.map((room) => (
          // <RoomCard key={room.id} roomName = {room.name} room={room} onJoinRoom={handleJoinRoom} />
          <RoomCard room={room} onJoinRoom={handleJoinRoom} />
        ))}
      </div>
    </div>


  );
  console.log("after the return");

  
  
};

export default JoinRoom;