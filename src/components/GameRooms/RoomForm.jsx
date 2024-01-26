import { useState } from 'react';

function RoomForm(props) {
    // State for room name input
  const [input, setInput] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onSubmit function with room data
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input, // Assuming "text" represents the room name
    });

    // Clear input fields after submission
    setInput('');
  };
  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
        { /* Room creation or update form */ }
      <form className="room-form" onSubmit={handleSubmit}>
        {/* Room name input */}
        <input
          type="text"
          placeholder="Enter room name"
          value={input}
          name="name"
          className="room-input"
          onChange={handleChange}
        ></input>
        {/* Button for adding or updating a room */}
        {!props.edit ? (
          <button className="room-button">Join Room</button>
        ) : (
          <button className="room-button">Create Room</button>
        )}
      </form>
    </div>
  ): null; // Return null if edit prop is truthy
}

export default RoomForm;
