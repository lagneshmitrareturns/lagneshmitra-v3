console.log("MAIN JS LOADED 🔥");

import { auth } from "/firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";


// 🔐 session mobile persistence
await setPersistence(auth, browserLocalPersistence);

// Google provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


// =======================================
// 🔥 CONNECT LOGIN BUTTON
// =======================================
window.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("loginBtn") || document.getElementById("googleLoginBtn");

  if (!btn) {
    console.log("Login button not on this page");
    return;
  }

  console.log("Login button connected ✅");

  btn.onclick = () => {
    console.log("Redirecting to Google...");
    signInWithRedirect(auth, provider);
  };
});


// =======================================
// ⭐ REAL LOGIN DETECTOR ⭐
// =======================================
onAuthStateChanged(auth, (user) => {

  if (!user) {
    console.log("User NOT logged in");
    return;
  }

  console.log("User logged in:", user.email);

  const path = window.location.pathname;

  // 🚀 redirect ONLY from landing page
  if (
    path === "/" ||
    path.includes("index.html") ||
    path.includes("login")
  ) {
    console.log("Redirecting to ideology...");
    window.location.href = "/ideology.html";
  }

});
