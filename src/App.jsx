import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/home/index";
import JoinRoom from './components/RoomForm';
// import CreateRoom from './components/RoomForm';

function App() {

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
