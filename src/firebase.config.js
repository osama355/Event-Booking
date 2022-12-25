import { getApp, getApps, initializeApp } from "firebase/app";
// import  "firebase/auth";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDU5jneqlo051qcyuxARdtyKamgAkFhOow",
  authDomain: "event-management-32dc3.firebaseapp.com",
  projectId: "event-management-32dc3",
  storageBucket: "event-management-32dc3.appspot.com",
  messagingSenderId: "1097935795623",
  appId: "1:1097935795623:web:e2114c1817d51965207282",
  measurementId: "G-WXGVVJ8BN3",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth=getAuth(app);
export { app, firestore, storage, auth };

