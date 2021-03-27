import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGX_THJw70QIOOQz_48V9iaqsCCXnB_JA",
  authDomain: "daychallenge-702c2.firebaseapp.com",
  projectId: "daychallenge-702c2",
  storageBucket: "daychallenge-702c2.appspot.com",
  messagingSenderId: "329055837238",
  appId: "1:329055837238:web:c70ecc45eada4e4ede0c97",
  measurementId: "G-43S09G51MT"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };