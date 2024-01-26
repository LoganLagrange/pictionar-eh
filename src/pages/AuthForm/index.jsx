import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

export default function AuthForm(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const subHandle = e=>{
    e.preventDefault();
    props.handleSubmit({
      email,
      password
    })
  }
 
  return (
    <div className="AuthForm">
      <h3>{props.type}</h3>
      <form onSubmit={subHandle}>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button>{props.type}</button>
      </form>
    </div>
  );
}
