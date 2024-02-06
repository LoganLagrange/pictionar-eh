import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import {Navigate, useNavigate} from 'react-router-dom'

export default function AuthForm(props) {
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const subHandle = async (e)=>{
    e.preventDefault();
    
    // if(props.type==="signup") {
    //   try {
    //     const response = await API.signup({
    //       username,
    //       password
    //     });
    //   console.log("Signup successful:", response);
    // }catch (error) {
    //   console.log("Signup failed", error.message);
    // }
    // } else if(props.type==="login") {
    //   try {
    //     const response = await API.login({
    //       username,
    //       password
    //     });
    //   console.log("Login successful:", response);
    // }catch (error) {
    //   console.log("Login failed", error.message);
    // }
    // }
    try {
      await props.handleSubmit({
        username,
        password
      });
      console.log(`${props.type} successful!`)
      navigate("/")
    } catch (err) {
      console.log(`${props.type} failed!`, err)
    }
    
  }
 
  return (
    <div className="AuthForm">
      <h3>{props.type}</h3>
      <form onSubmit={subHandle}>
        <input type="text" value={username} onChange={e=>setusername(e.target.value)} />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button>{props.type}</button>
      </form>
    </div>
  );
}
