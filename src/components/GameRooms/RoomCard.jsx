import React from 'react';

const RoomCard = ({ room, onJoinRoom }) => {
  return (
    <div className='room-card'>
      <h3>{room.name} : {room.key}</h3>  {/* Does not display anything */}
      <button onClick={() => onJoinRoom(room.id)}>Join</button>
    </div>
  );
};

export default RoomCard;
