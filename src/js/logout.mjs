import { auth } from "./firebaseConfig.mjs";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

export async function logoutUser() {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error.message);
  }
}
