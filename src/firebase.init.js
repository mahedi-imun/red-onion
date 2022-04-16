// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALWZ61bX6d9eQHBYAjUfkYDP0Pslennv8",
  authDomain: "red-onion-6b43a.firebaseapp.com",
  projectId: "red-onion-6b43a",
  storageBucket: "red-onion-6b43a.appspot.com",
  messagingSenderId: "129479963299",
  appId: "1:129479963299:web:93c9d0ee8843ca22e4c516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth