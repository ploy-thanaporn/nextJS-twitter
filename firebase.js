// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.NEXT_PUBLI_FIREBASE_API_KEY,
  authDomain: "twitter-project-nextjs.firebaseapp.com",
  projectId: "twitter-project-nextjs",
  storageBucket: "twitter-project-nextjs.appspot.com",
  messagingSenderId: "110951219093",
  appId: "1:110951219093:web:001ba4bda0d6bb9047409c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
