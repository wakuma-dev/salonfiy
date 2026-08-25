import { initializeApp, type FirebaseApp} from "firebase/app";
import { getAnalytics, type Analytics} from "firebase/analytics";
import { getFirestore, type Firestore} from "firebase/firestore";
import {getAuth, type Auth } from "firebase/auth"

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDBpaPpLrbgRV2eVFL23RDJdHZCLak6SoY",
  authDomain: "salonify-66efc.firebaseapp.com",
  projectId: "salonify-66efc",
  storageBucket: "salonify-66efc.firebasestorage.app",
  messagingSenderId: "142315001234",
  appId: "1:142315001234:web:16e42e0fbc95df01535d4b",
  measurementId: "G-6015D5YV62"

};
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const analytics: Analytics = getAnalytics(app);

export default app;