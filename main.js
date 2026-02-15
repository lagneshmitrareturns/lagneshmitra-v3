console.log("MAIN JS LOADED 🚀");

// auth functions import
import { connectGoogleLogin, detectUser } from "./auth.js";

// Page load hone ka wait
window.addEventListener("DOMContentLoaded", () => {

  console.log("DOM READY ✅");

  // Google login button connect
  connectGoogleLogin("loginBtn");

  // User detect after login
  detectUser((user) => {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    console.log("User logged in:", user.email);

    const nameBox = document.getElementById("userName");
    if (nameBox) {
      nameBox.innerText = "Welcome " + user.displayName;
    }

    // 👉 Optional redirect after login
    if (window.location.pathname === "/" || window.location.pathname.includes("index")) {
      window.location.href = "/ideology.html";
    }
  });

});
