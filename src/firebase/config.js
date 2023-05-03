import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDqXR72-ds9VdRBqExaFbWWkFJdEbrrpnY",
  authDomain: "react-cursos-8d85a.firebaseapp.com",
  projectId: "react-cursos-8d85a",
  storageBucket: "react-cursos-8d85a.appspot.com",
  messagingSenderId: "800360787181",
  appId: "1:800360787181:web:a1e10da94ca3326ad170e4"
};


export const FirabaseApp = initializeApp(firebaseConfig);
export const FirabaseAuth = getAuth( FirabaseApp );
export const  FirabaseDB = getFirestore( FirabaseApp );

