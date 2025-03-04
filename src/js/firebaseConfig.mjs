// Import Firebase from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK3-8ROKnEeNE7CLBDiAA4jOS9iMH6O9E",
  authDomain: "noroff-firebase-app.firebaseapp.com",
  projectId: "noroff-firebase-app",
  storageBucket: "noroff-firebase-app.appspot.com",
  messagingSenderId: "593096559089",
  appId: "1:593096559089:web:7acde6c1f195fa1bd85c50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase initialized:", app);

export { auth };
