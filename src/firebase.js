import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCznDRPkQsuztShsionjJPQp_JR-8gQShI",
  authDomain: "seudobook.firebaseapp.com",
  databaseURL: "https://seudobook.firebaseio.com",
  projectId: "seudobook",
  storageBucket: "seudobook.appspot.com",
  messagingSenderId: "651708655486"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export default firebase;

/*
if (!firebase.apps.length) {
  firebase.initializeApp({});
}*/
