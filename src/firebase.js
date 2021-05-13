import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMbMdLkIL28AUULjHst4O0yG11HVJYc4M",
  authDomain: "disney-plus-clone-9eec5.firebaseapp.com",
  projectId: "disney-plus-clone-9eec5",
  storageBucket: "disney-plus-clone-9eec5.appspot.com",
  messagingSenderId: "399282400816",
  appId: "1:399282400816:web:cf5d013c4676048994c7f5",
  measurementId: "G-QE0XR2XEFJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
