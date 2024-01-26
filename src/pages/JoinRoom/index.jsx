import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import RoomCard from './RoomCard';

const JoinRoom = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:pictionar-eh-socket-server');

    // Listen for room updates from socket.io
    socket.on('roomUpdate', (updatedRooms) => {
      setRooms(updatedRooms);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleJoinRoom = async (roomId) => {
    try {
      // Send a request to your backend to handle the joining process
      const response = await fetch(`http://localhost:${PORT}/api/join-room/${roomId}`, {
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
        console.log(`Successfully joined room ${roomId}`);
        // Add any additional logic here (e.g., redirect to the room page)
      } else {
        console.error(`Failed to join room ${roomId}`);
        // Handle errors or show a message to the user
      }
    } catch (error) {
      console.error('Error joining room:', error);
      // Handle unexpected errors
    }
  };

  return (
    <div className="join-room-container">
      <h3 className="room-card">Available Rooms</h3>
      <div className="flex-container">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} onJoinRoom={handleJoinRoom} />
        ))}
      </div>
    </div>
  );
};

export default JoinRoom;