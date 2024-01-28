import { useState } from 'react';

function CreateRoomForm(props) {
  // State for room name input
  const [roomName, setRoomName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onSubmit function with room data
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      name: roomName,
    });

    // Clear input fields after submission
    setRoomName('');
  };

  // Handle input change
  const handleChange = (e) => {
    setRoomName(e.target.value);
  };

  return (
    <div>
      <form className="create-room-form" onSubmit={handleSubmit}>
        {/* Room name input */}
        <input
          type="text"
          placeholder="Enter room name"
          value={roomName}
          name="name"
          className="room-input"
          onChange={handleChange}
        ></input>
        {/* Button for creating a room */}
        <button className="room-button">Create Room</button>
      </form>
    </div>
  );
}

export default CreateRoomForm;
