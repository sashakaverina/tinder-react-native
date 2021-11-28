// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdInpJoTl5dm0Saej-dOUjoE8sWWfyGKE",
  authDomain: "tinder-to-y.firebaseapp.com",
  projectId: "tinder-to-y",
  storageBucket: "tinder-to-y.appspot.com",
  messagingSenderId: "416848028586",
  appId: "1:416848028586:web:438588724c4292fc1f01d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db}