// src/firebase.js is the file where we will configure our Firebase project.
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDnx2ZolZs7XFE8crDnZkiOOjT9tF12BTM",
    authDomain: "image-gallery-64ecf.firebaseapp.com",
    projectId: "image-gallery-64ecf",
    storageBucket: "image-gallery-64ecf.appspot.com",
    messagingSenderId: "888583922671",
    appId: "1:888583922671:web:f877acc9d15bacf7a78c1a"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { auth, signInWithEmailAndPassword };