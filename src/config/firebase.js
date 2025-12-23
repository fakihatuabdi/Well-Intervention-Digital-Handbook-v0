import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
// Get remaining values from Firebase Console > Project Settings > Your apps
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "wi-digital-handbook-v0.firebaseapp.com",
  databaseURL: "https://wi-digital-handbook-v0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wi-digital-handbook-v0",
  storageBucket: "wi-digital-handbook-v0.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
