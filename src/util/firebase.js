// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXQaA1RxZrM89eNOVXMP8vJ-26unl5E8g",
  authDomain: "idoz-8fe20.firebaseapp.com",
  projectId: "idoz-8fe20",
  storageBucket: "idoz-8fe20.firebasestorage.app",
  messagingSenderId: "397030347733",
  appId: "1:397030347733:web:c9ae4ef429b5e02666235c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailandUser = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const data = response.user;

    console.log(data);
  } catch (error) {
    throw new Error(error);
  }
};

export { registerWithEmailandUser };

// API_KEY = "AIzaSyBXQaA1RxZrM89eNOVXMP8vJ-26unl5E8g",
// AUTH_DOMAIN= "idoz-8fe20.firebaseapp.com",
// PROJECT_ID= "idoz-8fe20",
// STORAGE_BUCKET= "idoz-8fe20.firebasestorage.app",
// MESSAGING_SENDER_ID= "397030347733",
// APP_ID= "1:397030347733:web:c9ae4ef429b5e02666235c"
