import firebase from 'firebase';

const firebaseConfig = {
        //add your config file, generated for your app on firebase console, here 
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
