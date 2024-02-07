import React, { useState, useEffect } from 'react';
import RoomCard from '../../components/GameRooms/RoomCard';
import '../JoinRoom/style.css'
import socketUse from '../../utils/socket';

const JoinRoom = ({currentRoom, setRoom}) => {
  // const {user} = useAuth();
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 1', description: 'Description 1', players:[]},
    { id: 2, name: 'Room 2', description: 'Description 2', players:[]},
    { id: 3, name: 'Room 3', description: 'Description 3', players:[]},
  ]);

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
        <h1>Select an existing room to join!</h1>
        {Object.keys(rooms).map((roomName) => (
          // <RoomCard key={room.id} roomName = {room.name} room={room} onJoinRoom={handleJoinRoom} />
          <RoomCard key={roomName} room={{name: roomName, count: rooms[roomName].count} } currentRoom={currentRoom} setRoom={setRoom}/>
        ))}
      </div>
    </div>
  );
  console.log("after the return");

  
  
};

export default JoinRoom;