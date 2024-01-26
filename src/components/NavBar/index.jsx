import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function NavBar(props) {
    
    return (
        <div className="NavBar">
           <Link to="/">Home</Link>
           <Link to="/login">Login</Link>
           <Link to="/signup">Signup</Link>
           <Link to="/newroom">New Room</Link>
        </div>
    );
}

export default NavBar;