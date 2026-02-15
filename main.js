console.log("MAIN ENGINE START 🚀");

// ⭐ status text (debug)
const status = document.getElementById("jsStatus");
if (status) {
  status.innerText = "MAIN.JS LOADED ✅";
}

import { connectGoogleLogin, detectUser } from "/auth.js";


// =============================
// 🔥 CONNECT GOOGLE BUTTONS
// =============================
connectGoogleLogin("loginBtn");
connectGoogleLogin("googleLoginBtn");


// =============================
// 🔥 LOGIN DETECTOR + REDIRECT
// =============================
detectUser((user) => {

  if (!user) {
    console.log("No user session");
    return;
  }

  console.log("User logged in:", user.email);

  // ⭐ debug text
  if (status) {
    status.innerText = "USER LOGGED IN 🎉";
  }

  const path = window.location.pathname;

  // Login page → ideology page redirect
  if (
    path === "/" ||
    path.includes("login") ||
    path.includes("index")
  ) {
    console.log("Redirecting to ideology page...");
    window.location.href = "/ideology.html";
  }

});
