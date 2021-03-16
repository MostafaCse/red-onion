import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyADSTxAUlDzy2OVbWswcIUW1BvFQcKjEks",
    authDomain: "red-onion-38b36.firebaseapp.com",
    projectId: "red-onion-38b36",
    storageBucket: "red-onion-38b36.appspot.com",
    messagingSenderId: "625207298568",
    appId: "1:625207298568:web:b0e0465a96537b5ecc5fbd"
  };
  export default firebaseConfig;
  firebase.initializeApp(firebaseConfig);
  
