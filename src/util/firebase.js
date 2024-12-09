// Import the functions you need from the SDKs you need
import {
  createUserWithEmailAndPassword,
  getAuth,
  initializeApp,
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const registerWithEmail = async (username, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      username,
      email,
      password
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// API_KEY = "AIzaSyBXQaA1RxZrM89eNOVXMP8vJ-26unl5E8g",
// AUTH_DOMAIN= "idoz-8fe20.firebaseapp.com",
// PROJECT_ID= "idoz-8fe20",
// STORAGE_BUCKET= "idoz-8fe20.firebasestorage.app",
// MESSAGING_SENDER_ID= "397030347733",
// APP_ID= "1:397030347733:web:c9ae4ef429b5e02666235c"
