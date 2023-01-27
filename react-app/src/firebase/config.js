import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBbruoA-Lrm3gBNGfQiHtZNmzAjO5jTjk0",
  authDomain: "weatherapp-87786.firebaseapp.com",
  projectId: "weatherapp-87786",
  storageBucket: "weatherapp-87786.appspot.com",
  messagingSenderId: "738749604459",
  appId: "1:738749604459:web:f48c78f62784e8fe4d872e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
