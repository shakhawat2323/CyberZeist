import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB2r36aYp4IaoUehWLiJMYP6qDoLUTtwg",
  authDomain: "nexo232.firebaseapp.com",
  projectId: "nexo232",
  storageBucket: "nexo232.firebasestorage.app",
  messagingSenderId: "417295726869",
  appId: "1:417295726869:web:a7c024e8daa6b03349d11c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
