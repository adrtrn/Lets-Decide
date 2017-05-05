import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBrqiraNNXtOJdWpDbkz2DICmhBzXTDW_A",
  authDomain: "togetherly-400df.firebaseapp.com",
  databaseURL: "https://togetherly-400df.firebaseio.com",
  projectId: "togetherly-400df",
  storageBucket: "togetherly-400df.appspot.com",
  messagingSenderId: "978212683840"
};

firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

