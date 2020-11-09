// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBCTEYvXcpOxTnJF4i9UCfi2NHuDGMf6xE",
  authDomain: "grocerylist-9d973.firebaseapp.com",
  databaseURL: "https://grocerylist-9d973.firebaseio.com",
  projectId: "grocerylist-9d973",
  storageBucket: "grocerylist-9d973.appspot.com",
  messagingSenderId: "879915568978",
  appId: "1:879915568978:web:ba691188eca4a35c95748b",
  measurementId: "G-CQ4PCHHTX4"


};

firebase.initializeApp(firebaseConfig);



// Save the list to database

