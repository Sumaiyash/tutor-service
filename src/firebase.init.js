// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl5-DOjwzuNRWwC45tTVC8mlEqkOnRTno",
  authDomain: "tutor-47cd0.firebaseapp.com",
  projectId: "tutor-47cd0",
  storageBucket: "tutor-47cd0.appspot.com",
  messagingSenderId: "134660769038",
  appId: "1:134660769038:web:47bf3009944349dbb6c35f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;