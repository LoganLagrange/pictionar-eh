import React from 'react';


const RoomCard = ({ room, onJoinRoom }) => {
  return (
    <div>
      <h3 className='room-card'>Available Rooms{room.name}</h3>
      <ul>
        {room.map((singleRoom) => (
          <li key={singleRoom.id}>
            {singleRoom.name} <button onClick={() => onJoinRoom(singleRoom.id)}>Join</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomCard;
