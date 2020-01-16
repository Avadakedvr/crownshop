import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAwgkvQTbg-dXsuz-wAp9hDpjNgKVb1FW8",
  authDomain: "crown-db-ava.firebaseapp.com",
  databaseURL: "https://crown-db-ava.firebaseio.com",
  projectId: "crown-db-ava",
  storageBucket: "crown-db-ava.appspot.com",
  messagingSenderId: "92644097730",
  appId: "1:92644097730:web:ab580df0e2aa1fe64c055b",
  measurementId: "G-9PKHKYP1PZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;