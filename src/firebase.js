import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBSY9ga4vZ0SZhAHIkD2nwI0w81AMf8ITo',
  authDomain: 'lets-decide-4a05b.firebaseapp.com',
  databaseURL: 'https://lets-decide-4a05b.firebaseio.com',
  projectId: 'lets-decide-4a05b',
  storageBucket: 'lets-decide-4a05b.appspot.com',
  messagingSenderId: '667939050797'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
