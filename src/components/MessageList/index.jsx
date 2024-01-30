import {React, useEffect, useState} from React;
import socketUse from "../../utils/socket";

export default function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        socketUse.RecMessage(setMessages);
    })

  return (
    <ul>
        {messages.map((message, index) => {
            <li key={index}>{message}</li>
        })}
    </ul>
  )
}
