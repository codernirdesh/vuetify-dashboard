import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDNF9J3V2yl5i6vahM4A6vcceFKyF-YKJI",
  authDomain: "fir-demo-2c603.firebaseapp.com",
  databaseURL: "https://fir-demo-2c603.firebaseio.com",
  projectId: "fir-demo-2c603",
  storageBucket: "fir-demo-2c603.appspot.com",
  messagingSenderId: "561565763567",
  appId: "1:561565763567:web:530fa2c027eda154c1981a",
  measurementId: "G-XFB6MWNE9T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
