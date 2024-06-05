import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEKEY,
  authDomain: "todoapp-83d39.firebaseapp.com",
  projectId: "todoapp-83d39",
  storageBucket: "todoapp-83d39.appspot.com",
  messagingSenderId: "1027271604336",
  appId: "1:1027271604336:web:f8fb14584466b0ff7fdcb5"
}


const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()