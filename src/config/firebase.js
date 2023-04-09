// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { getDatabase } from "@firebase/database";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD7hN2-GOHBbdkMSSovZRnv7lYj6N7KgE",
  authDomain: "get-together-435f2.firebaseapp.com",
  projectId: "get-together-435f2",
  storageBucket: "get-together-435f2.appspot.com",
  messagingSenderId: "258626108625",
  appId: "1:258626108625:web:c16be0994e4abc86fd19f0",
  databaseURL: "https://get-together-435f2-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };