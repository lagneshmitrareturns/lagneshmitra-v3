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


// 🔥 BUTTON CONNECT FUNCTION (export)
export function connectGoogleLogin(btnId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  btn.onclick = () => {
    console.log("Redirecting to Google...");
    signInWithRedirect(auth, provider);
  };
}


// 🔥 LOGIN DETECTOR FUNCTION (export)
export async function detectUser(callback) {

  // 1️⃣ After redirect login
  try {
    const result = await getRedirectResult(auth);
    if (result?.user) {
      callback(result.user);
      return;
    }
  } catch (e) {
    console.log(e);
  }

  // 2️⃣ Session restore
  onAuthStateChanged(auth, (user) => {
    if (user) callback(user);
  });
}
