import { initializeApp } from "firebase/app";
import {
  User,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export const logoutFirebase = () => {
  signOut(auth);
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User | null> => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err) {
    if (err instanceof Error) {
      // Handle authentication-specific errors gracefully
      console.error(err.message);
      alert(err.message);
    } else {
      console.error("Unexpected error", err);
    }
    return null; // Return null in case of error
  }
};

export const registerWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User | null> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const userData = {
      uid: res.user.uid,
      name,
      email: res.user.email,
      images: [],
    };

    await setDoc(doc(db, "users", res.user.uid), userData);

    return res.user;
  } catch (err) {
    if (err instanceof Error) {
      // Handle authentication-specific errors gracefully
      console.error(err.message);
      switch (err.message) {
        case "Firebase: Error (auth/wrong-password).":
          alert("Неверный пароль.");
          break;
        case "Firebase: Error (auth/user-not-found).":
          alert("Пользователь с таким Email не найден.");
          break;
        case "Firebase: Error (auth/email-already-in-use).":
          alert("Пользователь с таким Email уже существует.");
          break;
        default:
          alert(err.message);
      }
    } else {
      console.error("Unexpected error", err);
    }
    return null; // Return null in case of error
  }
};

export default auth;
