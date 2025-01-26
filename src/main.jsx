import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpVrh-NPAyCg4gXz-lMi7hd1OnF3n41j4",
  authDomain: "apolo99-d7dd3.firebaseapp.com",
  projectId: "apolo99-d7dd3",
  storageBucket: "apolo99-d7dd3.firebasestorage.app",
  messagingSenderId: "978789581470",
  appId: "1:978789581470:web:7ffb17491419a8fa51f18f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
