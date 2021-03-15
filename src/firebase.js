import firebase from "firebase"

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBejPRa-5a5ahy5ZEQyXvdaqp6Rg5u-SCY",
  authDomain: "alakhe-ea789.firebaseapp.com",
  projectId: "alakhe-ea789",
  storageBucket: "alakhe-ea789.appspot.com",
  messagingSenderId: "1028491285661",
  appId: "1:1028491285661:web:4532d0235a5ff4f4aa7074",
  measurementId: "G-911ER81L9F"
})

var firestore = firebase.firestore()

export {firestore}