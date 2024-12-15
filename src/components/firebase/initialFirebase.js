// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, get, child, set} from 'firebase/database'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


  const firebaseConfig = {
    apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "start-ea4be.firebaseapp.com",
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: "start-ea4be",
    storageBucket: "start-ea4be.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: "G-DZFJ5NH7FN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app)

const fetchWeddingData = async (id) => {
    const dbRef = ref(database);
    try {
        const data = await get(child(dbRef, `/startTwo/${id}`))
        if (data.exists()) {
            return data.val()
        } else {
            console.log('eror' );
            return null
        }
    } catch (error) {
        console.log('tidak bekerja', error);
        return null
    }
}
const addDataToFirebase = async (id, formData) => {

    try {
      await set(ref(database, `/startTwo/${id}`), formData);
      console.log("Data successfully added!");
    } catch (error) {
      console.error("Error adding data:", error);
    }
    
  };
 const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    // setVerify(true)
    return true

  } catch (error) {
    console.error("Error during login:", error.message);
   
  }}

export {app, database, fetchWeddingData, addDataToFirebase, login}