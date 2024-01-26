import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8lnUrd2STDam0t50CwEtq2fIAA8f_KmY",
  authDomain: "linkedin-clone-1c53f.firebaseapp.com",
  projectId: "linkedin-clone-1c53f",
  storageBucket: "linkedin-clone-1c53f.appspot.com",
  messagingSenderId: "524609833861",
  appId: "1:524609833861:web:c5bfb4c3a549b5e92292ec",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
