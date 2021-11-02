import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCA9cN-uFFMJR6kL_OF4GVaMW3IeNYDL0E",
    authDomain: "thegamerplace-3b049.firebaseapp.com",
    projectId: "thegamerplace-3b049",
    storageBucket: "thegamerplace-3b049.appspot.com",
    messagingSenderId: "884681255980",
    appId: "1:884681255980:web:99cedc7d075e5db6ca3589"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);