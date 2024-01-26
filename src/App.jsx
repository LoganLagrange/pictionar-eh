import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/home/index";
import JoinRoom from './components/RoomForm';
import API from "./utils.API";
import { useState } from "react";
import authForm from "./pages/authForm"
// import CreateRoom from './components/RoomForm';

function App() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const handleLogin = loginObj => {
    API.login(loginObj).then(loginData=>{
      setToken(loginData.token);
      setIsLoggedIn(true);
      setUserId(loginData.user.id);
    }).catch(err=>{
      console.log('error', err)
    })
  }
  const handleSignup = signupObj => {
    API.signup(signupObj).then(signupData=>{
      setToken(signupData.token);
      setIsLoggedIn(true);
      setUserId(signupData.user.id);
    }).catch(err=>{
      console.log('error', err)
    })
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/join-room" element={<JoinRoom/>} />
        {/* <Route path="/create-room" component={CreateRoom} /> */}
      </Routes>
    </Router>
  );
}

export default App;
