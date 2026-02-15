console.log("🔥 AUTH JS LOADED 🔥");

import { auth } from "/firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";


// ⭐ MOBILE LOGIN FIX (VERY IMPORTANT)
await setPersistence(auth, browserLocalPersistence);


// ⭐ GOOGLE PROVIDER
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


// =====================================================
// ⭐ STEP 1 — HANDLE RETURN FROM GOOGLE (MOST IMPORTANT)
// =====================================================
getRedirectResult(auth)
  .then((result) => {

    if (!result) {
      console.log("No redirect result yet");
      return;
    }

    if (result.user) {
      console.log("🔥 Redirect login success:", result.user.email);

      // go to ideology page after login
      window.location.href = "/ideology.html";
    }

  })
  .catch((err) => {
    console.error("Redirect error:", err);
  });


// =====================================================
// ⭐ STEP 2 — CONNECT LOGIN BUTTON
// =====================================================
window.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("loginBtn");

  if (!btn) {
    console.log("Login button not found");
    return;
  }

  console.log("Login button connected ✅");

  btn.onclick = () => {
    console.log("Redirecting to Google...");
    signInWithRedirect(auth, provider);
  };

});


// =====================================================
// ⭐ STEP 3 — SESSION DETECTOR (AFTER FIRST LOGIN)
// =====================================================
onAuthStateChanged(auth, (user) => {

  if (!user) {
    console.log("Not logged in");
    return;
  }

  console.log("User session active:", user.email);

  // If user already logged in → auto go ideology
  if (window.location.pathname === "/" || window.location.pathname.includes("index")) {
    window.location.href = "/ideology.html";
  }

});
