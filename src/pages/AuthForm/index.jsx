import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

export default function AuthForm(props) {
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")
  const subHandle = async (e)=>{
    e.preventDefault();
    try {
      const response = await API.signup({
        username,
        password
      });
    console.log("Signup successful:", response);
  }catch (error) {
    console.log("Signup failed", error.message);
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
