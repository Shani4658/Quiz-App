// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Aa-rxJg00tpjfpzzWEQSteuIUTFHboY",
  authDomain: "upraised-quiz-app.firebaseapp.com",
  projectId: "upraised-quiz-app",
  storageBucket: "upraised-quiz-app.appspot.com",
  messagingSenderId: "682171377467",
  appId: "1:682171377467:web:e6b0bc79215e8572a9f91e",
  measurementId: "G-2FW62HHCDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);