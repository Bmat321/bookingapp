import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "bmatadmin.firebaseapp.com",
  projectId: "bmatadmin",
  storageBucket: "bmatadmin.appspot.com",
  messagingSenderId: "58385637505",
  appId: "1:58385637505:web:90568422af3db4cfb0ed80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
