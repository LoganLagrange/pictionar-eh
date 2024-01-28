import React from 'react';

const RoomCard = ({ room, onJoinRoom }) => {
  return (
    <div className='room-card'>
      <h3>{room.name}</h3>
      <button onClick={() => onJoinRoom(room.id)}>Join</button>
    </div>
  );
};

export default RoomCard;
