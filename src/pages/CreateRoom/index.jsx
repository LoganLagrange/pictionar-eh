import React from "react";
import CreateRoomForm from '../../components/GameRooms/CreateRoomForm';
import axios from "axios"; // Import the axios module for making HTTP requests
import {useHistory} from 'react-router-dom'; // Import useHistory

//Add event listener to form submit button
const CreateRoomForm = () => {
    const history = useHistory(); // Initialize useHistory
  
    const handleCreateRoom = async (roomId, roomName) => {
      try {
        // Make a POST request to your socket.io server using axios
        const response = await axios.post("http://socket.io/api/rooms", {
          roomId: roomId,
          roomName: roomName
        });
  
        // Perform the redirection to the game room using history.push
        history.push(`/Gameroom/${roomName}`);
      } catch (error) {
        console.error("Error creating room:", error);
      }
    };

  //return room form
  return (
      <div>
      <h1>Create Room</h1>
      <CreateRoomForm onCreateRoom={handleCreateRoom} />
    </div>
  );
};

export default CreateRoomForm;
