console.log("AUTH ENGINE STARTED 🚀");

import { auth } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const btn = document.getElementById("loginBtn");

// ================= LOGIN BUTTON =================
if (btn) {
  btn.addEventListener("click", async () => {
    console.log("Opening Google login...");
    await signInWithPopup(auth, provider);
  });
}

// ================= LOGIN DETECTOR =================
onAuthStateChanged(auth, (user) => {

  if (!user) {
    console.log("User not logged in");
    return;
  }

  console.log("Login success:", user.email);

  // ⭐ REDIRECT AFTER LOGIN
  if (window.location.pathname.includes("index") || window.location.pathname === "/") {
    window.location.href = "/ideology.html";
  }

});
