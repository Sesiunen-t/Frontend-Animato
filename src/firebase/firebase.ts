// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD1BwOeIlLGqJ272EF8zJb5MruBTo0GgtU",
  authDomain: "animato-login.firebaseapp.com",
  projectId: "animato-login",
  storageBucket: "animato-login.appspot.com",
  messagingSenderId: "432649272074",
  appId: "1:432649272074:web:da1e3664d38d99e7f658f3",
  measurementId: "G-VL7649K1R0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);