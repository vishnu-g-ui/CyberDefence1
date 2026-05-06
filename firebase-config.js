// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyDDWFO2__4R_rxEpekNVOChn4eEcqz2ULU",
  authDomain:        "cyberdefence-407ca.firebaseapp.com",
  databaseURL:       "https://cyberdefence-407ca-default-rtdb.firebaseio.com",
  projectId:         "cyberdefence-407ca",
  storageBucket:     "cyberdefence-407ca.firebasestorage.app",
  messagingSenderId: "651712050448",
  appId:             "1:651712050448:web:216eaa9dc75f70e943e195"
};

const app = initializeApp(firebaseConfig);
export const db   = getDatabase(app);
export const auth = getAuth(app);
