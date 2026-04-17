// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_hUVsW-1xWGV5tzo3sAys5-yjsOWMxRw",
  authDomain: "prepwise-118fb.firebaseapp.com",
  projectId: "prepwise-118fb",
  storageBucket: "prepwise-118fb.firebasestorage.app",
  messagingSenderId: "674526094452",
  appId: "1:674526094452:web:74f2293f612af6e3569d21",
  measurementId: "G-YZ9FMJPQVJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);