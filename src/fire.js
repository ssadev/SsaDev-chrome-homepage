import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBmWuiAQEERcAT_plA4A8954ba78bodgsQ",
  authDomain: "quickstart-1558201547791.firebaseapp.com",
  databaseURL: "https://quickstart-1558201547791.firebaseio.com",
  projectId: "quickstart-1558201547791",
  storageBucket: "quickstart-1558201547791.appspot.com",
  messagingSenderId: "267231943552",
  appId: "1:267231943552:web:ecf76460ef3403acfbff65",
  measurementId: "G-HK5D7GDL2R",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default fire;
