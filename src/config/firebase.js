import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
// Replace with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyBqm7YxqX9Z8K7H6fZ2tQvJ9tN8xJ5pL4M",
  authDomain: "well-intervention-handbook.firebaseapp.com",
  databaseURL: "https://well-intervention-handbook-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "well-intervention-handbook",
  storageBucket: "well-intervention-handbook.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
