import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBpSa5TCNJrIHO_2QaysvR9JKNuNZyA5SQ",
    authDomain: "whatsapp-2-e9ffb.firebaseapp.com",
    projectId: "whatsapp-2-e9ffb",
    storageBucket: "whatsapp-2-e9ffb.appspot.com",
    messagingSenderId: "1040514043903",
    appId: "1:1040514043903:web:49fc6c4ec3227a9d2721ca"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };

  