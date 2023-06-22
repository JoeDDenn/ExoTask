// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRpz1AE5KbeM5TWmoNaXd_w7UpKBavEPI",
  authDomain: "projectdoc-aaa72.firebaseapp.com",
  projectId: "projectdoc-aaa72",
  storageBucket: "projectdoc-aaa72.appspot.com",
  messagingSenderId: "663104099772",
  appId: "1:663104099772:web:98d110ad1fbf89eb27c7b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);