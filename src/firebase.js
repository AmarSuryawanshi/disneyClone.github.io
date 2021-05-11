import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHTRrzYpu_Q6GZu6AL1_sC1Yn0L7zSz-U",
  authDomain: "disneyplus-clone-a5881.firebaseapp.com",
  projectId: "disneyplus-clone-a5881",
  storageBucket: "disneyplus-clone-a5881.appspot.com",
  messagingSenderId: "947239183532",
  appId: "1:947239183532:web:f21814c4039b302a35ab09",
  measurementId: "G-S5E85YTKVV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
