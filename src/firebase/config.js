import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCBnuqw2CHWFKYuZINznKpfROGhPQMGOkM",
  authDomain: "fir-vue-project-1f4d8.firebaseapp.com",
  projectId: "fir-vue-project-1f4d8",
  storageBucket: "fir-vue-project-1f4d8.appspot.com",
  messagingSenderId: "952815162784",
  appId: "1:952815162784:web:9e6c51d8e845939a6580c5",
};

// init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore


const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth };