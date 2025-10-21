// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1zakCgMUXERiSVSGfIojiVXbpwTKn1nU",
  authDomain: "netflixgpt-2e8bb.firebaseapp.com",
  projectId: "netflixgpt-2e8bb",
  storageBucket: "netflixgpt-2e8bb.firebasestorage.app",
  messagingSenderId: "555361253741",
  appId: "1:555361253741:web:570c7c7209eee9233f8264",
  measurementId: "G-KB5JP3TSKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
