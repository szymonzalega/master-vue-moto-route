import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const REACT_APP_FIREBASE_API_KEY = "AIzaSyAdlADUUzjY7H_z-l2Xy7vZQeoyGW9Zhl0"
const REACT_APP_FIREBASE_AUTH_DOMAIN = "master-moto-route.firebaseapp.com"
const REACT_APP_FIREBASE_DATABASE_URL = "https://master-moto-route.firebaseio.com"
const REACT_APP_FIREBASE_PROJECT_ID = "master-moto-route"
const REACT_APP_FIREBASE_STORAGE_BUCKET = "master-moto-route.appspot.com"
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "869881351473"
const REACT_APP_FIREBASE_APP_ID = "1:869881351473:web:13c40fcfd6ad2bd483b410"

const app = firebase.initializeApp({
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export const db = firebase.firestore();
export const storage = firebase.storage().ref();
export default app;
