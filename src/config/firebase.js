// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firestore/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBpPa01YHLh1HHfshodnnvyYxEvi9kwg",
  authDomain: "vite-contact-202ad.firebaseapp.com",
  projectId: "vite-contact-202ad",
  storageBucket: "vite-contact-202ad.firebasestorage.app",
  messagingSenderId: "1079221953238",
  appId: "1:1079221953238:web:70b074d0829037b9149f77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);