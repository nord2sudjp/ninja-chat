import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBfdJpoXNJ3aI3nnwYFPhLxPp4mw7mfL-s",
    authDomain: "ninja-chat-2019.firebaseapp.com",
    databaseURL: "https://ninja-chat-2019.firebaseio.com",
    projectId: "ninja-chat-2019",
    storageBucket: "ninja-chat-2019.appspot.com",
    messagingSenderId: "4541960007",
    appId: "1:4541960007:web:22f3d036de665afb"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
