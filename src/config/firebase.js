import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIQXdJAAGhOt5MDPw16H1FJK7Vx9Uyjus",
  authDomain: "wi-digital-handbook-v0.firebaseapp.com",
  databaseURL: "https://wi-digital-handbook-v0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wi-digital-handbook-v0",
  storageBucket: "wi-digital-handbook-v0.firebasestorage.app",
  messagingSenderId: "964170755512",
  appId: "1:964170755512:web:7ed2074ce3d10aeb15334d",
  measurementId: "G-94SKV18ZC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
