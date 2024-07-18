import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import FirebaseDatabase from "./database";
import { FirebaseAuth } from "./auth";
import { getStorage} from 'firebase/storage';
import Firestorage from "./storage";

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
const storage = getStorage(firebaseApp);

export class FirebaseApi {
  constructor() {}
  readonly database = new FirebaseDatabase(db);
  readonly auth = new FirebaseAuth(auth);
  readonly storage = new Firestorage(storage);
}
export default new FirebaseApi();
