// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBxPItpECF7Mbfuc9T3adU-1eGcHz8i9J8",
  authDomain: "auth-1b27f.firebaseapp.com",
  projectId: "auth-1b27f",
  storageBucket: "auth-1b27f.appspot.com",
  messagingSenderId: "712092087547",
  appId: "1:712092087547:web:e1cb43f820c90b050aec5e",
  measurementId: "G-545BGPSYYE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

 