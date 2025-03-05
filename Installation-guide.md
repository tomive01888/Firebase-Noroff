# 🚀 Firebase Setup Guide (CDN Version)

This guide will walk you through setting up a Firebase project, obtaining the necessary configuration values, and integrating Firebase using the **CDN version** in a simple web app.

---

## 📌 Step 1: Create a Firebase Project

1. **Go to Firebase Console:**
   - Open your browser and go to [Firebase Console](https://console.firebase.google.com/).

2. **Sign in with Google:**
   - If you're not logged in, sign in using your Google account. Or register new account.

3. **Create a New Project:**
   - Click **Create a project** or a existing one. 
   - Follow the step-by-step guidelines on creating new project.

---

## 🔑 Step 2: Get Your Firebase Configuration

1. In the Firebase console, **navigate to Project Settings**:
   - Click the **⚙️ gear icon** in the left sidebar.
   - Select **Project settings**.

2. Scroll down to **Your Apps** section.
   - Click on **"Web" (</> icon)** to register a web app.
   - Enter an **App nickname** (e.g., `MyWebApp`).
   - Click **Register App**.

3. **Copy Your Firebase Config Values:**
   - After registering, you'll see the Firebase **SDK setup and configuration**.
   - Copy the `firebaseConfig` object values.

---

## 💻 Step 3: Set Up Your Project in VS Code

1. **Open VS Code** and create a new folder for your project:
   ```sh
   mkdir firebase-cdn-project
   cd firebase-cdn-project
   ```

2. **Create Project Files**:
   ```sh
   touch index.html firebaseConfig.mjs main.mjs
   ```

3. **Edit `firebaseConfig.mjs`**:
   - Open `firebaseConfig.mjs` and paste your Firebase configuration.
   - Example:

   ```js
   // Import Firebase from CDN
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
   import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

   // Firebase configuration (Replace with your values)
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   console.log("Firebase initialized:", app);

   export { auth };
   ```

---

## 📝 Step 4: Create a Simple HTML Page

1. Open `index.html` and add this:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Firebase CDN Project</title>
   </head>
   <body>
     <h1>Firebase Authentication</h1>
     <form id="login-form">
       <input type="email" id="email" placeholder="Email" required />
       <input type="password" id="password" placeholder="Password" required />
       <button type="submit">Login</button>
     </form>
     <script type="module" src="./main.mjs"></script>
   </body>
   </html>
   ```

2. **Add authentication logic in `main.mjs`**:

   ```js
   import { auth } from "./firebaseConfig.mjs";
   import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

   document.getElementById("login-form").addEventListener("submit", async (e) => {
     e.preventDefault();
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;

     try {
       const userCredential = await signInWithEmailAndPassword(auth, email, password);
       console.log("Logged in:", userCredential.user);
     } catch (error) {
       console.error("Login error:", error.message);
     }
   });
   ```

---

## 🚀 Step 5: Run Your Project

Since you're using **module imports**, you'll need to serve files via a local server.