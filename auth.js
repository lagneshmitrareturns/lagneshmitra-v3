import { auth } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("loginBtn");
const app = document.getElementById("app");
const loading = document.getElementById("loading");


// 🔥 LOGIN BUTTON
if (loginBtn) {
  loginBtn.onclick = async () => {
    await signInWithPopup(auth, provider);
  };
}


// ⭐ MAIN MAGIC — WAIT FOR FIREBASE FIRST
onAuthStateChanged(auth, (user) => {

  loading.style.display = "none";

  // USER ALREADY LOGGED IN → GO IDEOLOGY
  if (user) {
    window.location.replace("/ideology.html");
    return;
  }

  // USER NOT LOGGED IN → SHOW LOGIN PAGE
  app.style.display = "block";
});
