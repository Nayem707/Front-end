import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8c0w4bZ_8qQxE9QDNrk_GTYVDGP7vhU4",
  authDomain: "uploadingfile-4df61.firebaseapp.com",
  projectId: "uploadingfile-4df61",
  storageBucket: "uploadingfile-4df61.appspot.com",
  messagingSenderId: "701682516604",
  appId: "1:701682516604:web:e36440c489f3733f52fff9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
