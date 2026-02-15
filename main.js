console.log("MAIN ENGINE START 🚀");

import { connectGoogleLogin, detectUser } from "/auth.js";


// Connect login button (agar page me hai)
connectGoogleLogin("loginBtn");
connectGoogleLogin("googleLoginBtn");


// Detect login and redirect
detectUser((user) => {

  if (!user) {
    console.log("No user session");
    return;
  }

  console.log("User logged in:", user.email);

  const path = window.location.pathname;

  // Login page → ideology
  if (path === "/" || path.includes("login") || path.includes("index")) {
    window.location.href = "/ideology.html";
  }

});
