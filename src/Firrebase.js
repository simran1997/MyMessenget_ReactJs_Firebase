import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2PDT4X4QVhgGrDtWx3cPYC9RdeA2sfWQ",
    authDomain: "my-messenger-cb5e2.firebaseapp.com",
    databaseURL: "https://my-messenger-cb5e2.firebaseio.com",
    projectId: "my-messenger-cb5e2",
    storageBucket: "my-messenger-cb5e2.appspot.com",
    messagingSenderId: "221278051599",
    appId: "1:221278051599:web:5f5da88d41eeb10c60327a",
    measurementId: "G-2CZGQGR1DJ"
  };

  // Initialize Firebase with a "default" Firebase project
var firebaseProject = firebase.initializeApp(firebaseConfig);

console.log(firebaseProject.name);  // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
// var defaultStorage = defaultProject.storage();
var db = firebaseProject.firestore();

// Option 2: Access Firebase services using shorthand notation
// defaultStorage = firebase.storage();
// constdefaultFirestore = firebase.firestore();

export { db };