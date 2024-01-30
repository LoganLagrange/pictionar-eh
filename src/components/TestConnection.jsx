import React, { useEffect } from 'react';
import socketUse from '../utils/socket'; // Replace with the actual path to your socketUse file

const TestConnection = () => {
  useEffect(() => {
    // Call the connect function when the component mounts
    socketUse.joinRoom("test room");
    

    // Cleanup function: disconnect the socket when the component unmounts
    return () => {
      socketUse.disconnect();
    };
  }, []);

  return (
    <div>
      <p>Testing Socket.IO connection...</p>
    </div>
  );
};

export default TestConnection;