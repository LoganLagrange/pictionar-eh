// Importing necessary React libraries and components
import React from "react"; // Main React library
import ReactDOM from "react-dom"; // ReactDOM library for rendering components to the DOM

import App from "./App"; // Importing the main App component from the App file

// Accessing the root DOM element where the React app will be mounted
const rootElement = document.getElementById("root");

// Rendering the React application into the root DOM element
ReactDOM.render(
  // React.StrictMode is a wrapper to help identify potential problems in an application.
  // It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App /> {/* The main App component is rendered here */}
  </React.StrictMode>,
  rootElement // Specifying where in the DOM the React app should be rendered
);

