// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDyGmzmtz7xBkVLdnHGrA2cjc6Vp2qiYL0",
  authDomain: "dzayergo-314d3.firebaseapp.com",
  projectId: "dzayergo-314d3",
  storageBucket: "dzayergo-314d3.appspot.com",
  messagingSenderId: "958093065280",
  appId: "1:958093065280:web:923ab334b56f132534b3a5",
  measurementId: "G-3VZCSV7E1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app) ;