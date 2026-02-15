console.log("AUTH JS LOADED 🔥");

import { auth } from "/firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

await setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


// ============================
// LOGIN BUTTON
// ============================
window.addEventListener("DOMContentLoaded", async () => {

  const btn = document.getElementById("loginBtn");

  if (btn) {
    btn.onclick = () => {
      console.log("Redirecting to Google...");
      signInWithRedirect(auth, provider);
    };
  }

  // ⭐⭐ THIS WAS MISSING ⭐⭐
  // Detect redirect login result
  try {
    const result = await getRedirectResult(auth);

    if (result?.user) {
      alert("LOGIN SUCCESS 🔥");
      window.location.href = "/ideology.html";
      return;
    }
  } catch (err) {
    console.log("Redirect error:", err);
  }
});


// ============================
// SESSION RESTORE (refresh case)
// ============================
onAuthStateChanged(auth, (user) => {

  if (!user) {
    console.log("Not logged in");
    return;
  }

  console.log("Session restored:", user.email);

  if (window.location.pathname === "/" || window.location.pathname.includes("index")) {
    window.location.href = "/ideology.html";
  }

});
