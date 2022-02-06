import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBy_BayBl2CaDr4u3GrD7pB3h8tWBnlrnQ",
  authDomain: "project-71-67112.firebaseapp.com",
  projectId: "project-71-67112",
  storageBucket: "project-71-67112.appspot.com",
  messagingSenderId: "719731488510",
  appId: "1:719731488510:web:67610afab7a77ad53717af"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
