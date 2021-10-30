// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA9cN-uFFMJR6kL_OF4GVaMW3IeNYDL0E",
  authDomain: "thegamerplace-3b049.firebaseapp.com",
  projectId: "thegamerplace-3b049",
  storageBucket: "thegamerplace-3b049.appspot.com",
  messagingSenderId: "884681255980",
  appId: "1:884681255980:web:99cedc7d075e5db6ca3589",
  measurementId: "G-92J98FVEK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);