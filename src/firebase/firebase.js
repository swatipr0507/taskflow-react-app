import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeh3gYrS5sOMkTrwUhW7kWZF6b7TGPYMU",
  authDomain: "taskflow-918b8.firebaseapp.com",
  projectId: "taskflow-918b8",
  storageBucket: "taskflow-918b8.firebasestorage.app",
  messagingSenderId: "466599101564",
  appId: "1:466599101564:web:3495831bb55aee90aa75f9",
  measurementId: "G-18Q14B6G26"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);