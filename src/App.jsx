import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/home/index";
import Gamepage from "./pages/gameroom/index";
import JoinRoom from './components/RoomForm';

import JoinRoom from './components/GameRooms/RoomForm';
import { useState } from "react";
import AuthForm from "./pages/authForm"
// import CreateRoom from './components/RoomForm';
import NavBar from './components/NavBar'; // Import NavBar
import NewRoom from './components/GameRooms/RoomForm'; // Import NewRoom
import API from './utils/API';


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
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/newroom" element={<NewRoom/>} />
        <Route path="/join-room" element={<JoinRoom/>} />
        <Route path='/login' element={<AuthForm type="login" handSubmit={handleLogin}/>}/>
        <Route path='/signup' element={<AuthForm type="signup" handSubmit={handleSignup}/>}/>
        <Route path="/gamepage" element={<Gamepage/>} />
        {/* <Route path="/create-room" component={CreateRoom} /> */}
      </Routes>
    </Router>
  );
}

export default App;
