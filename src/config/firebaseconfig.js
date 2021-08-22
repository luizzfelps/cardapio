import firebase from "firebase";
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBzvpSAHxnZW1B1rexVCvbvZb5gqK1-qDM",
    authDomain: "cardapiodigitaltccuni.firebaseapp.com",
    databaseURL: "https://cardapiodigitaltccuni-default-rtdb.firebaseio.com",
    projectId: "cardapiodigitaltccuni",
    storageBucket: "cardapiodigitaltccuni.appspot.com",
    messagingSenderId: "22594397186",
    appId: "1:22594397186:web:0c90d1c7a924558315731b",
    measurementId: "G-93J6NCS83T"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore()
  export default database