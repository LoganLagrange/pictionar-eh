import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API"

export default function AuthForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSub = e => {
        e.preventDefault();
        props.handleSubmit({
            username,
            password
        })
    }

    return (
        <div className="AuthForm">
            <h3>{props.type}</h3>
            <form onSubmit={handleSub}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button>{props.type}</button>
            </form>
        </div>
    )
}
