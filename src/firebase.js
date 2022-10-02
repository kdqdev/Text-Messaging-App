import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVm4E3Fbg5QtNJ0WEC7SPv5sfnmC5RuOs",
    authDomain: "discord-clone-6ec74.firebaseapp.com",
    projectId: "discord-clone-6ec74",
    storageBucket: "discord-clone-6ec74.appspot.com",
    messagingSenderId: "779092206191",
    appId: "1:779092206191:web:f570f0511c0f6135dfe39a",
    measurementId: "G-BX1VSPJNC4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;