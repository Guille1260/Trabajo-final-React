import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGQscmh0RKc07DbFFdEgRfxjZ1Qi169ZI",
  authDomain: "ecommers-5c27f.firebaseapp.com",
  projectId: "ecommers-5c27f",
  storageBucket: "ecommers-5c27f.firebasestorage.app",
  messagingSenderId: "92913058753",
  appId: "1:92913058753:web:ad146444ce87ca430ae540"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Exportar para usar en otros archivos
export { db, collection, getDocs, addDoc  };

