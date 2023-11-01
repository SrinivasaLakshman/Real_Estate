// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-4ff1c.firebaseapp.com",
  projectId: "real-estate-4ff1c",
  storageBucket: "real-estate-4ff1c.appspot.com",
  messagingSenderId: "914668701465",
  appId: "1:914668701465:web:810ea4d87f2869d595a788"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);