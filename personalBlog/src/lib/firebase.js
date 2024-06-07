
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_DBKEY,
  authDomain: "personalblog-25b20.firebaseapp.com",
  projectId: "personalblog-25b20",
  storageBucket: "personalblog-25b20.appspot.com",
  messagingSenderId: "72834450784",
  appId: "1:72834450784:web:458beb805d09c9a47a0a05"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore()