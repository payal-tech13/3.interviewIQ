
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "agent-2217c.firebaseapp.com",
  projectId: "agent-2217c",
  storageBucket: "agent-2217c.firebasestorage.app",
  messagingSenderId: "274739193732",
  appId: "1:274739193732:web:f5a4f8ba9ed4d4a4de5fd1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}