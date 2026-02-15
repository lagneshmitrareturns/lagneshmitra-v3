import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_NEW_KEY",
  authDomain: "PASTE_AUTH_DOMAIN",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
