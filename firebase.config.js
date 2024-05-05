// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMslAbSQKpE47GNlWKhK6DygErExMTyxk",
  authDomain: "coffee-store-with-mongodbt.firebaseapp.com",
  projectId: "coffee-store-with-mongodbt",
  storageBucket: "coffee-store-with-mongodbt.appspot.com",
  messagingSenderId: "586118702099",
  appId: "1:586118702099:web:320f4e695f1b8475380be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;