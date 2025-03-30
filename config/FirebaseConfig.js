import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUtR5VNwKfoLqkK4LJ2ENdJ_w1ujYYHiE",
    authDomain: "cross-platform-gp.firebaseapp.com",
    projectId: "cross-platform-gp",
    storageBucket: "cross-platform-gp.firebasestorage.app",
    messagingSenderId: "127759959957",
    appId: "1:127759959957:web:2a12b0a994a33d403b189c"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export const FIREBASE_DB = getFirestore(FIREBASE_APP);