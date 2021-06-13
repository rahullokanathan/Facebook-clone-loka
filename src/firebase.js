import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2GArY0eRyUTYrEvFxnmJQOU6uZfsrEV8",
    authDomain: "fb-clone-a5244.firebaseapp.com",
    projectId: "fb-clone-a5244",
    storageBucket: "fb-clone-a5244.appspot.com",
    messagingSenderId: "611223805659",
    appId: "1:611223805659:web:1c62ea2e3ba098c1f876fe",
    measurementId: "G-BKLWDS1CWQ"
    
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  
  export{auth, provider};
  export default db;
  