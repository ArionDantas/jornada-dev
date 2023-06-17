// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC9fOViomLHM6ponnqqaFELtV_7NrOu08s",
  authDomain: "tiktok-jornanda.firebaseapp.com",
  projectId: "tiktok-jornanda",
  storageBucket: "tiktok-jornanda.appspot.com",
  messagingSenderId: "854559228046",
  appId: "1:854559228046:web:ba391d3a8f67d82f6909df",
  measurementId: "G-DSZX34Q0KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;