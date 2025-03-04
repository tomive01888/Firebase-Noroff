import { auth } from "./firebaseConfig.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
    alert("Registration successful!");
  } catch (error) {
    console.error("Registration error:", error.message);
    alert(error.message);
  }
}
