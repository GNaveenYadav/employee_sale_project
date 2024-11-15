// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* This is the root component */}
  </React.StrictMode>,
  document.getElementById('root')  // Render App inside the div with id 'root'
);
