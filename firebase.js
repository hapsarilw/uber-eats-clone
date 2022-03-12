// v9 compat packages are API compatible with v8 code
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhyt5OgAZ98MFx2xaTifYHlh6Ya2hwoLQ",
  authDomain: "rn-uber-eats-clone-67396.firebaseapp.com",
  projectId: "rn-uber-eats-clone-67396",
  storageBucket: "rn-uber-eats-clone-67396.appspot.com",
  messagingSenderId: "798115581434",
  appId: "1:798115581434:web:62e63cea5dd3ee6708a843",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;