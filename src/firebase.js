import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDy_85qh3pF5JmlCCuY9nNbJNNfMdlSwqk",
  authDomain: "disney-plus-clone-1737d.firebaseapp.com",
  projectId: "disney-plus-clone-1737d",
  storageBucket: "disney-plus-clone-1737d.appspot.com",
  messagingSenderId: "536489451159",
  appId: "1:536489451159:web:21e13a650bafe44eb6d3d2",
  measurementId: "G-2PKHCF5HZN"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
