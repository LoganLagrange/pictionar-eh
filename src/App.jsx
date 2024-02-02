import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/home/index";
import Game from "./pages/gameroom/index";
import JoinRoom from './pages/JoinRoom/index';
import AuthForm from "./pages/authform/index";
import CreateRoomForm from './components/GameRooms/CreateRoomForm';
import NavBar from './components/NavBar'; // Import NavBar
import NewRoom from './components/GameRooms/CreateRoomForm'; // Import NewRoom
import API from './utils/API';
import socketUse from './utils/socket'
import TestConnection from './components/TestConnection';
import { AuthProvider } from './pages/Context/authcontext';

function App() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [currentRoom, setRoom] = useState('');

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
  const handleCreateRoom = (roomData) => {
    // Add the room data to the list of available rooms or store it in the database
    // You can use the useState hook or make an API call to store the room data
  
    // Redirect the user to the join room page
    // Note: `navigate` function needs to be defined or imported from 'react-router-dom' if you wish to use it here.
    // navigate('/join-room');
  };

  socketUse.connect();

  return (
    <AuthProvider>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/newroom" element={<NewRoom/>} />
        <Route path="/join-room" element={<JoinRoom currentRoom={currentRoom} setRoom={setRoom}/>} />
        <Route path='/login' element={<AuthForm type="login" handleSubmit={handleLogin}/>}/>
        <Route path='/signup' element={<AuthForm type="signup" handleSubmit={handleSignup}/>}/>
        <Route path="/game" element={<Game currentRoom={currentRoom} setRoom={setRoom}/>} />
        <Route path="/create-room" element={<CreateRoomForm onSubmit={handleCreateRoom} currentRoom={currentRoom} setRoom={setRoom}/>} />
      </Routes>
    </Router>
    </AuthProvider>
    // <TestConnection />
  );
}


export default App;
