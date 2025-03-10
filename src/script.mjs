import { registerUser } from "./js/register.mjs";
import { loginUser } from "./js/login.mjs";
import { logoutUser } from "./js/logout.mjs";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./js/firebaseConfig.mjs";

// DOM Elements
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerButton = document.getElementById("register-button");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");

const logoutButton = document.getElementById("logout-button");
const homepage = document.getElementById("homepage");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);

    // Show elements when logged in

    homepage.classList.remove("hidden");
  } else {
    homepage.classList.add("hidden");

    console.log("No user is logged in.");
  }
});

// Register Event (only if elements exist)
if (registerButton && registerEmail && registerPassword) {
  registerButton.addEventListener("click", () => {
    registerUser(registerEmail.value, registerPassword.value);
  });
}

// Login Event (only if elements exist)
if (loginButton && loginEmail && loginPassword) {
  loginButton.addEventListener("click", async () => {
    const user = await loginUser(loginEmail.value, loginPassword.value);
    if (user) {
      window.location.href = "/";
    }
  });
}

// Logout Event (only if elements exist)
if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    await logoutUser();
    if (homepage) {
      homepage.style.display = "none";
    }
  });
}
