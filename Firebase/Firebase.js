import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOXpJqAHpN_m1Z96bXcAkkkBxkV9mZ-OE",
  authDomain: "ecommerce-app-db8e2.firebaseapp.com",
  projectId: "ecommerce-app-db8e2",
  storageBucket: "ecommerce-app-db8e2.appspot.com",
  messagingSenderId: "830513990616",
  appId: "1:830513990616:web:26ee99a33002079f81c0ad",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// {
//   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app;
// }

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
