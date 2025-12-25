// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPFBufp0aDzECrhOcsap5LZBMa-SucOFM",
  authDomain: "interviewai-6add8.firebaseapp.com",
  projectId: "interviewai-6add8",
  storageBucket: "interviewai-6add8.firebasestorage.app",
  messagingSenderId: "856404796686",
  appId: "1:856404796686:web:25242f84fc9306b057635f",
  measurementId: "G-92LLZ7930D"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth=getAuth(app);
export const db=getFirestore(app)