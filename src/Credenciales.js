// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv0jJw7q9NXblnR8DMdslGod53CoUBdSI",
  authDomain: "crud-js-62572.firebaseapp.com",
  projectId: "crud-js-62572",
  storageBucket: "crud-js-62572.appspot.com",
  messagingSenderId: "1061890230438",
  appId: "1:1061890230438:web:0ad60065a99cf9f25d8c67",
  measurementId: "G-CB0KMLWYVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
//Este  documento es usado para acceder a la firebase
// con sus parametros correspondientes--