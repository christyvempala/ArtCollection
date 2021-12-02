import firebase from 'firebase'
import 'firebase/firestore'
var firebaseApp=firebase.initializeApp({
  
    apiKey: "AIzaSyClGbpjIVqAr0EXpMB6C-Gt_L6eBCnjNaE",
    authDomain: "artcollections-9cad9.firebaseapp.com",
    databaseURL:'https://artcollections-9cad9-default-rtdb.firebaseio.com/',
    projectId: "artcollections-9cad9",
    storageBucket: "artcollections-9cad9.appspot.com",
    messagingSenderId: "599546222558",
    appId: "1:599546222558:web:1dac9848eaf65868356f4f"
  
});

 var db=firebaseApp.firestore();
 export { db };