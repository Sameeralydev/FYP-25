
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // 👈 Firestore import

const firebaseConfig = {
  apiKey: "AIzaSyCQRr2cdKG7vAOQmOJ6QNCvTzm_YSEJkg8",
  authDomain: "sew-divine.firebaseapp.com",
  projectId: "sew-divine",
  storageBucket: "sew-divine.firebasestorage.app",
  messagingSenderId: "922625784498",
  appId: "1:922625784498:web:fab39b1f0d47a01383a7ab",
  measurementId: "G-WNN919ZDHP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);   // 👈 Firestore export
