// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrMGUscmu-owDUtDBs5UnF1V-KJm2yDSI",
  authDomain: "tutor-services-55917.firebaseapp.com",
  projectId: "tutor-services-55917",
  storageBucket: "tutor-services-55917.appspot.com",
  messagingSenderId: "59018693460",
  appId: "1:59018693460:web:78d988d04f9007b13f96c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;