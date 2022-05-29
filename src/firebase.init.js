// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8xPDNGfoTZDxxOdxMQNed8BInclwd5AY",
  authDomain: "constraction-app.firebaseapp.com",
  projectId: "constraction-app",
  storageBucket: "constraction-app.appspot.com",
  messagingSenderId: "669056099960",
  appId: "1:669056099960:web:298dd0d1ea934fa796ef8d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
