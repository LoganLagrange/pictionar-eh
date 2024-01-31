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
      socketUse.requestRooms();
    
  }, []);

  const handleJoinRoom = async (room) => {
    try {

      // Send a request to your backend to handle the joining process
      let PORT = 5001; // whatever your localhost PORT number is.
      const response = await fetch(`http://localhost:${PORT}/api/join-room/${room.name}`, {
        method: 'POST', // or 'PUT', 'PATCH', etc. depending on your socket.io API
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary authentication headers or tokens
        },
        // You can include additional data in the request body if needed
        body: JSON.stringify({
          userId: 'your-user-id', // Replace with the actual user ID
        }),
      });

      if (response.ok) {
        console.log(`Successfully joined room ${room}`);
        // Add any additional logic here (e.g., redirect to the room page)
      } else {
        console.error(`Failed to join room ${room}`);
        // Handle errors or show a message to the user
      }
    } catch (error) {
      console.error('Error joining room:', error);
      // Handle unexpected errors
    }
  };


  console.log("before the return");

  const handleClick = (roomArr) =>{

  }

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