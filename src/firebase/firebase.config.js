// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWGT-Fvke_32n3nDgF1LY4w0ywIABVNQg",
  authDomain: "jobportal-4af46.firebaseapp.com",
  projectId: "jobportal-4af46",
  storageBucket: "jobportal-4af46.firebasestorage.app",
  messagingSenderId: "965293862902",
  appId: "1:965293862902:web:cba92b08483ed37785a1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;