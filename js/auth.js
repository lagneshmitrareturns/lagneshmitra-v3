import { auth } from "./firebase.js";

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

export function connectGoogleLogin(btnId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  btn.onclick = () => {
    console.log("Redirecting to Google...");
    signInWithRedirect(auth, provider);
  };
}

export function detectUser(callback) {
  onAuthStateChanged(auth, (user)=>{
    callback(user);
  });
}
