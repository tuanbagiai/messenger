import * as firebase from "firebase";


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmuQFlAexw10RWWnowI3UgrTouCShSJXA",
    authDomain: "messengervn-6d779.firebaseapp.com",
    databaseURL: "https://messengervn-6d779.firebaseio.com",
    projectId: "messengervn-6d779",
    storageBucket: "messengervn-6d779.appspot.com",
    messagingSenderId: "38192834624",
    appId: "1:38192834624:web:4320e7dd89f3547e5817a5",
    measurementId: "G-2REWMS2K8T"
  });
  // const database =firebase.database();
  const db = firebaseApp.firestore();
  // firebase.database().ref().set({
  //   name:"hello every one"
  // });

  export default db;