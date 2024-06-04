import { initializeApp } from "firebase/app";
import {
  User,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged as fbOnAuthStateChanged,
  NextOrObserver,
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
export const onAuthStateChanged = (nextOrObserver: NextOrObserver<User>) => {
  return fbOnAuthStateChanged(auth, nextOrObserver);
};
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
      throw new Error(err.message);
    } else {
      throw new Error("Unexpected error");
    }
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
          throw new Error("Неверный пароль.");
        case "Firebase: Error (auth/user-not-found).":
          throw new Error("Пользователь с таким Email не найден.");
        case "Firebase: Error (auth/email-already-in-use).":
          throw new Error("Пользователь с таким Email уже существует.");
        default:
          throw new Error(err.message);
      }
    } else {
      throw new Error("Unexpected error");
    }
  }
};

export default auth;
