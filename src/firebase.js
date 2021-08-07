import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBGKv9f9L-Jo3F1h_fHWNBxn6DkBTyflXI",
    authDomain: "facebook-clone-c05a7.firebaseapp.com",
    projectId: "facebook-clone-c05a7",
    storageBucket: "facebook-clone-c05a7.appspot.com",
    messagingSenderId: "457733211580",
    appId: "1:457733211580:web:054ac3605f2f89912117b9",
    measurementId: "G-ZQ0J6HBM4G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth ();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;