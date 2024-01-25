import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./style.css"
import API from "../../utils/API"

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

  useEffect(()=>{
    API.getAllAnswers().then(answerData=>{
      console.log(answerData);
    }).catch(err=>{
      console.log(err)
    })
  })

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
  