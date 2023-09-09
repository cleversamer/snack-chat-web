import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB112Fm_ZObZMkkkEq8rUaMU2TJMPhzqQ",
  authDomain: "snackchat-app.firebaseapp.com",
  projectId: "snackchat-app",
  storageBucket: "snackchat-app.appspot.com",
  messagingSenderId: "277455744859",
  appId: "1:277455744859:web:f78d492b3b2d423ed0347e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
