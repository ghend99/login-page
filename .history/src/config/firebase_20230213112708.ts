// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2C0XgigMOWneH4vUZKvD1y3zBUuPgBrU",
  authDomain: "login-page-931f9.firebaseapp.com",
  projectId: "login-page-931f9",
  storageBucket: "login-page-931f9.appspot.com",
  messagingSenderId: "785462935320",
  appId: "1:785462935320:web:89646353e1f2ec17e1a86d",
  measurementId: "G-4YVBP86CT1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
