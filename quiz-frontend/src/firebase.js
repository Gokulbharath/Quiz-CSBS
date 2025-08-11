// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9nMMg7gfq5oP-MFnVxHXKQLtREZp5TOM",
  authDomain: "quizzz-cfca6.firebaseapp.com",
  projectId: "quizzz-cfca6",
  storageBucket: "quizzz-cfca6.firebasestorage.app",
  messagingSenderId: "559427296081",
  appId: "1:559427296081:web:5efac23b522e046c211170",
  measurementId: "G-9PZG9PD2L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Provider exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
