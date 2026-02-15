console.log("AUTH MODULE READY 🔥");

import { auth } from "/firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

await setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


// ===== GOOGLE LOGIN CONNECT =====
export function connectGoogleLogin(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  console.log("Login button connected");

  btn.onclick = () => {
    console.log("Redirecting to Google...");
    signInWithRedirect(auth, provider);
  };
}


// ===== USER DETECTOR =====
export function detectUser(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
