import { connectGoogleLogin, detectUser } from "/auth.js";

connectGoogleLogin("loginBtn");

detectUser((user) => {
  // login ke baad redirect
  if (window.location.pathname === "/" || window.location.pathname.includes("index")) {
    window.location.href = "/ideology.html";
  }
});
