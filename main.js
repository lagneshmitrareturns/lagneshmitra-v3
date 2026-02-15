console.log("🔥 MAIN JS LOADED 🔥");

// auth functions import
import { connectGoogleLogin, detectUser } from "/auth.js";


// ===============================
// 🔥 CONNECT GOOGLE LOGIN BUTTON
// ===============================
connectGoogleLogin("loginBtn");        // login test page
connectGoogleLogin("googleLoginBtn");  // homepage mini G button



// ===============================
// 🔥 DETECT LOGIN STATE
// ===============================
detectUser((user) => {

  if (!user) {
    console.log("User not logged in");
    return;
  }

  console.log("User session active:", user.email);

  // agar user index page par hai → ideology bhej do
  const path = window.location.pathname;

  if (
    path === "/" ||
    path.includes("index") ||
    path.includes("login")
  ) {
    console.log("Redirecting to ideology page...");
    window.location.href = "/ideology.html";
  }

});
