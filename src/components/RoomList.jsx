import {useState} from 'react';
import RoomForm from './RoomForm'

const RoomList = ({ rooms, onJoinRoom }) => {
  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.name} <button onClick={() => onJoinRoom(room.id)}>Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
