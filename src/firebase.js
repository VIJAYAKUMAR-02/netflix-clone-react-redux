
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCM2BHVUq_bXxre04dFyFTUoNH--4uZnvQ",
  authDomain: "netflix-clone-683b4.firebaseapp.com",
  projectId: "netflix-clone-683b4",
  storageBucket: "netflix-clone-683b4.appspot.com",
  messagingSenderId: "950915064333",
  appId: "1:950915064333:web:95c431b0ff6f25bb8c2b44"
};


const app=initializeApp(firebaseConfig)
const auth=getAuth()
const db=getFirestore()

export{app,auth,db}