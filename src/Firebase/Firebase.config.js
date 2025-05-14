// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF7U71h5WXC9HHI2Iv0YUxCOvHXXlgDvY",
  authDomain: "ecommerce-website-acbf3.firebaseapp.com",
  projectId: "ecommerce-website-acbf3",
  storageBucket: "ecommerce-website-acbf3.firebasestorage.app",
  messagingSenderId: "779297038760",
  appId: "1:779297038760:web:8881687f3d7d5d73fe7d9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;