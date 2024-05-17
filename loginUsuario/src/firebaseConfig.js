
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyABs32yda41QzxhV7BtAAUITIEgiJ2GrCU",
  authDomain: "autentica-usuario-33142.firebaseapp.com",
  projectId: "autentica-usuario-33142",
  storageBucket: "autentica-usuario-33142.appspot.com",
  messagingSenderId: "635255203516",
  appId: "1:635255203516:web:fc745ce344af842ccf12b9"
};


const app = initializeApp(firebaseConfig); // oi :D
export const auth=getAuth(app);