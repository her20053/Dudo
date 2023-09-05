// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAidGF0nXPPdMBkPTTfgho_j6NumupS9Zk",
    authDomain: "dudo-791b0.firebaseapp.com",
    projectId: "dudo-791b0",
    storageBucket: "dudo-791b0.appspot.com",
    messagingSenderId: "328591741670",
    appId: "1:328591741670:web:3eb601f720e9bb36296127",
    measurementId: "G-D0YLPMRPHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);