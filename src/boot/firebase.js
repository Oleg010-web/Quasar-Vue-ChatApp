import { boot } from 'quasar/wrappers'
import { firebase } from 'firebase/app'
import { initializeApp } from "firebase/app";
  //Add the firebase products that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAatztG0IVSdQvpIVBCS2ZPU_RoppQD4PQ",
  authDomain: "simplechat-50cac.firebaseapp.com",
  projectId: "simplechat-50cac",
  storageBucket: "simplechat-50cac.appspot.com",
  messagingSenderId: "361991498150",
  appId: "1:361991498150:web:07933f27ffa97a8ad44767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = app.auth()
const firebaseDb = app.database()

export { firebaseAuth, firebaseDb}
