import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfigString = process.env.NEXT_PUBLIC_FIREBASE_CONFIG
if (!firebaseConfigString) {
    throw new Error("Firebase config not found in environment variables.");
}

const firebaseConfig = JSON.parse(firebaseConfigString);
// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage()
export { app, auth, db, storage }