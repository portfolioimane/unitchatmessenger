import firebase from "firebase/app";
import "firebase/auth";
export const auth=firebase.initializeApp({
  apiKey: "AIzaSyCl1efN-u1aKaFJg96xH3enjZsRJShxRPA",
  authDomain: "unichat-test-bcb7a.firebaseapp.com",
  projectId: "unichat-test-bcb7a",
  storageBucket: "unichat-test-bcb7a.appspot.com",
  messagingSenderId: "492897864682",
  appId: "1:492897864682:web:025309a0f882d4cc0fc093"

}).auth();
