// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3ZK__Gd21ZIbpcfC3UGYpRKKsdGWoDtg",
  authDomain: "react-notes-919fd.firebaseapp.com",
  projectId: "react-notes-919fd",
  storageBucket: "react-notes-919fd.appspot.com",
  messagingSenderId: "628706582933",
  appId: "1:628706582933:web:3d230c68b15f73c112169c",
  measurementId: "G-3PK5Y2Q74C",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
