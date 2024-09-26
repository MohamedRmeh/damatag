// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV0iKrfOS3OU1KXa1pXi1OBRqvdUlVc00",
  authDomain: "damatag-e18e9.firebaseapp.com",
  projectId: "damatag-e18e9",
  storageBucket: "damatag-e18e9.appspot.com",
  messagingSenderId: "271425308317",
  appId: "1:271425308317:web:d3bc01c665f1242784f674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
