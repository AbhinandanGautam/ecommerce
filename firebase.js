import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA_ps-BpDhleeputhalh8F6b9CGgH7E5Vg",
  authDomain: "clone-e4725.firebaseapp.com",
  projectId: "clone-e4725",
  storageBucket: "clone-e4725.appspot.com",
  messagingSenderId: "386438456902",
  appId: "1:386438456902:web:04faa1d2b5907f41bd4c47",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
