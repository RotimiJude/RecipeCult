import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBKNyk0t8czvbBhnw8Bjup1m9gcHrE7qXo",
    authDomain: "recipe-cult.firebaseapp.com",
    projectId: "recipe-cult",
    storageBucket: "recipe-cult.firebasestorage.app",
    messagingSenderId: "582818648194",
    appId: "1:582818648194:web:25ea63e3641eaa14bc249b"
  };



  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export{projectFirestore}