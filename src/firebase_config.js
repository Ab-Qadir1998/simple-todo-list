import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBkfm4KiorbeA2uNVIZ9TCoVzE7TsrXKj4",
    authDomain: "todo-list-81757.firebaseapp.com",
    projectId: "todo-list-81757",
    storageBucket: "todo-list-81757.appspot.com",
    messagingSenderId: "407330147",
    appId: "1:407330147:web:4cc183203f85d1f3a9c756",
    measurementId: "G-3SV934XKLM"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  export { db } 