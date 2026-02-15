console.log("AUTH JS LOADED 🔥");

import { auth } from "/firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// persistence (mobile must)
await setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


// 🔥 LOGIN BUTTON CONNECT
window.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("loginBtn");

  if (btn) {
    console.log("Login button found");

    btn.onclick = () => {
      console.log("Redirecting to Google...");
      signInWithRedirect(auth, provider);
    };
  }

});


// 🔥 LOGIN DETECTOR (MAIN MAGIC)
onAuthStateChanged(auth, (user) => {

  if (!user) {
    console.log("Not logged in");
    return;
  }

  console.log("User logged in:", user.email);

  // redirect AFTER login
  if (window.location.pathname === "/" || window.location.pathname.includes("index")) {
    window.location.href = "/ideology.html";
  }

});
