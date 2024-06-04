// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRerzrSQ0DMbrSdgGVdlXvPLocztNvnPc",
  authDomain: "e-comerce-mi-tienda.firebaseapp.com",
  projectId: "e-comerce-mi-tienda",
  storageBucket: "e-comerce-mi-tienda.appspot.com",
  messagingSenderId: "713051968872",
  appId: "1:713051968872:web:daaadde856c9c74d20f2dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
