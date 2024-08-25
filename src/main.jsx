import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBfoK-mE3BkNqsvxqS_bxfCV6S4xIIDNGk",
  authDomain: "proyectoreactperalta.firebaseapp.com",
  projectId: "proyectoreactperalta",
  storageBucket: "proyectoreactperalta.appspot.com",
  messagingSenderId: "704738337843",
  appId: "1:704738337843:web:7b3ccee26d980bdee4ef46"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
