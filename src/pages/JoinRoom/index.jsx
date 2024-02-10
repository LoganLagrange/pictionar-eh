import React, { useState, useEffect } from 'react';
import RoomCard from '../../components/GameRooms/RoomCard';
import '../JoinRoom/style.css'
import socketUse from '../../utils/socket';
import CanadaFlag from '../../assets/Canada.png'

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
        console.log('received room')
        console.log(receivedRooms)
        // setRooms(receivedRooms);
      });
      socketUse.requestRooms();
      console.log(rooms);

  }, []);

  // Define handleJoinRoom function
  const handleJoinRoom = (roomId) => {
    // Your logic for joining a room goes here
    console.log(`Joining room ${roomId}`);
    // Set the current room
    setRoom(roomId);
  };

  let roomArr = document.querySelector(`.join-room-container`);
  console.log(roomArr);
  // roomArr.addEventListener('click',(e)=>{
  //   console.log(e.target);
  // });

  return (
    <div className="join-room-container" onClick={(e) => console.log(e.target)}>
      <h1>Select an existing room to join!</h1>
      <div className="flex-container">
      {Object.keys(rooms).map((roomName) => (
          <React.Fragment key={roomName}>
          <RoomCard 
          key={roomName} 
          room={{name: roomName, count: rooms[roomName].count} } 
          currentRoom={currentRoom} 
          setRoom={setRoom}
          onJoinRoom={() => handleJoinRoom(roomName)}
          />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
  console.log("after the return");

  
  
};

export default JoinRoom;