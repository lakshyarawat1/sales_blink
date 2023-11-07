// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzhwNmi2COumKJqyPoPT5dpehbkgQzlyk",
  authDomain: "salesblink-blog.firebaseapp.com",
  projectId: "salesblink-blog",
  storageBucket: "salesblink-blog.appspot.com",
  messagingSenderId: "881497886291",
  appId: "1:881497886291:web:aa94fe0ae0f6c14881c0a6",
  measurementId: "G-0JTG4RC9NE",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

