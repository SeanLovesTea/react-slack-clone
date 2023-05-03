import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"

const firebaseConfig = {

  apiKey: "AIzaSyDO62CA0hDKitef2KgJFiGW1sZcsljxTIA",

  authDomain: "react-slack-clone-e4850.firebaseapp.com",

  projectId: "react-slack-clone-e4850",

  storageBucket: "react-slack-clone-e4850.appspot.com",

  messagingSenderId: "13326298629",

  appId: "1:13326298629:web:c421234197bd5959ce766c"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig)

export default firebase


// stuff 
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { 
//   getAuth, 
//   createUserWithEmailAndPassword, 
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut
//  } from 'firebase/auth'
//  import { getFirestore } from 'firebase/firestore'
//const auth = getAuth()
// const user = auth.currentUser
// const dp = getFirestore()

