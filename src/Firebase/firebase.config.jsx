// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRNMcAJYTKHzpl19xQ9ZVYLGx_HB6JwcM",
  authDomain: "dragon-news-firebase-d1107.firebaseapp.com",
  projectId: "dragon-news-firebase-d1107",
  storageBucket: "dragon-news-firebase-d1107.firebasestorage.app",
  messagingSenderId: "401314265186",
  appId: "1:401314265186:web:65fbadad920ab45761b93b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
