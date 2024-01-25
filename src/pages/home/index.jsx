import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    padding: '20px',
  };

  const headingStyle = {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  };
    return (
      <header style={headerStyle} className="header">
        <h1 style={headingStyle}>Welcome to Pictionar-eh</h1>
        <div>
        <Link to="/join-room">
          <button>Join Existing Room</button>
        </Link>
        <Link to="/create-room">
          <button>Create New Room</button>
        </Link>
      </div>
      </header>
    );
  }
  
  export default Homepage;
  