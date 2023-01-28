// import { boot } from 'quasar/wrappers'
// import { FirebaseApp } from 'firebase/app';
// import {firebase} from "firebase/app"
import { initializeApp } from "firebase/app";
  //Add the firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAatztG0IVSdQvpIVBCS2ZPU_RoppQD4PQ",
  authDomain: "simplechat-50cac.firebaseapp.com",
  projectId: "simplechat-50cac",
  storageBucket: "simplechat-50cac.appspot.com",
  messagingSenderId: "361991498150",
  appId: "1:361991498150:web:07933f27ffa97a8ad44767",
  databaseURL: "https://simplechat-50cac-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
const firebaseDb = getDatabase(app)


export { firebaseAuth, firebaseDb, createUserWithEmailAndPassword,signInWithEmailAndPassword, ref, set}
