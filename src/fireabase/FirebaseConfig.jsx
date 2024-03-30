// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIuRH1ifaTwcL_z5NFJck55HsxSNItXfE",
  authDomain: "anukul-b19b7.firebaseapp.com",
  projectId: "anukul-b19b7",
  storageBucket: "anukul-b19b7.appspot.com",
  messagingSenderId: "750201387157",
  appId: "1:750201387157:web:d51cc1f3a8b93301c0039c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { fireDB, auth, storage };