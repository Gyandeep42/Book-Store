// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_ypfaGutZaN93K-vwew_KT5hXoXcrt4",
  authDomain: "bookstore-28b82.firebaseapp.com",
  projectId: "bookstore-28b82",
  storageBucket: "bookstore-28b82.appspot.com",
  messagingSenderId: "500522697857",
  appId: "1:500522697857:web:356a6679e1d3411e94b980"
};

// Initialize Firebase
const application = initializeApp(firebaseConfig);
export default application