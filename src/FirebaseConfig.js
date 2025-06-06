// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiuVg5cv39RiUp84jo8CGoeoeJ2y8alTc",
    authDomain: "menu-32d2d.firebaseapp.com",
    projectId: "menu-32d2d",
    storageBucket: "menu-32d2d.firebasestorage.app",
    messagingSenderId: "985475061376",
    appId: "1:985475061376:web:ab267ff0dd2518afdf3865",
    measurementId: "G-55N0P7JG19"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
