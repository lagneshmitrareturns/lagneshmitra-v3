console.log("AUTH ENGINE LOADED");

import { auth } from "./firebase-config.js";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  signOut
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// persist login
await setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// LOGIN BUTTON CONNECTOR
export function connectGoogleLogin(buttonId){
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.onclick = () => {
    console.log("Redirecting to Google...");
    signInWithRedirect(auth, provider);
  };
}

// SESSION DETECTOR
export function detectUser(callback){
  onAuthStateChanged(auth, (user)=>{
    callback(user);
  });
}

// LOGOUT
export async function logout(){
  await signOut(auth);
  location.reload();
}
