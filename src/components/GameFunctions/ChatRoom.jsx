// Importing necessary libraries and components
import React from "react"; // React library for building UI
import CanvasDraw from "./DrawingCanvas"; // Component for drawing canvas
import { GithubPicker } from "react-color"; // Component for color picker
import "../../pages/gameroom/style.css"; // Importing CSS styles
import { useClickAway } from "../../utils/useClickAway"; // Custom hook for handling clicks outside an element

import classNames from "classnames"; // Utility for conditional className joining


export default function App() {

    return (
        <div class="container box" id="chatBox">
            <form id="chat-form">
                <input id="chat-input" type="text" placeholder="Type a message..." name="message" required/>
                    <button class="button is-success is-link p-1" id="sendButton" type="submit">SEND</button>
            </form>
        </div>

    )
}