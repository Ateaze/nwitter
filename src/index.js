import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import firebase from "./firebase.js";
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
