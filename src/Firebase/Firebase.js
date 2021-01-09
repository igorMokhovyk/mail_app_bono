import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCHOS4CFrGThNm88b4Y69wtKhtxUjG4hHo",
  authDomain: "mail-app-bono.firebaseapp.com",
  projectId: "mail-app-bono",
  storageBucket: "mail-app-bono.appspot.com",
  messagingSenderId: "746433602036",
  appId: "1:746433602036:web:e116a9680d7d8d86c959a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};
