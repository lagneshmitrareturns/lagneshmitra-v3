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


// ================= AUTO SESSION DETECTOR =================
onAuthStateChanged(auth, (user) => {

  const path = window.location.pathname;

  // USER NOT LOGGED IN
  if (!user) {
    console.log("No user session");
    return;
  }

  console.log("Session found:", user.email);

  // ⭐ If user already logged in → skip login page
  if (path === "/" || path.includes("index")) {
    window.location.replace("/ideology.html");
  }

});
