// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB4hrJY5BOlNvog0zCfqXGwq9j3m7h0_g",
  authDomain: "invente-dev.firebaseapp.com",
  projectId: "invente-dev",
  storageBucket: "invente-dev.appspot.com",
  messagingSenderId: "240214928328",
  appId: "1:240214928328:web:99539f0a15f465c4cfaefd",
  measurementId: "G-HT4RXJHTRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
