import { connectGoogleLogin, detectUser } from "./auth.js";

connectGoogleLogin("loginBtn");

detectUser((user)=>{
  if(!user) return;

  document.getElementById("userName").innerText =
    "Welcome " + user.displayName;
});
