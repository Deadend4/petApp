import {
  Firestore,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  onSnapshot,
  Unsubscribe,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { DBUser } from "src/types";

const USERS_COLLECTION_NAME = "users";

export default class FirebaseDatabase {
  constructor(db: Firestore) {
    this.db = db;
  }
  private db: Firestore;
  user = {
    setUser: async (userData: DBUser) => {
      await setDoc(doc(this.db, USERS_COLLECTION_NAME, userData.uid), userData);
    },
    deleteUser: async (uid: string) => {
      await deleteDoc(doc(this.db, USERS_COLLECTION_NAME, uid));
    },
    getUser: async (uid: string) => {
      const userDoc = await getDoc(doc(this.db, USERS_COLLECTION_NAME, uid));
      return userDoc.data() as DBUser;
    },
    onSnapshot: (
      uid: string,
      observer: (
        snapshot: DocumentSnapshot<DocumentData, DocumentData>,
      ) => void,
    ): Unsubscribe => {
      const unsub = onSnapshot(
        doc(this.db, USERS_COLLECTION_NAME, uid),
        observer,
      );
      return unsub;
    },
  };
}
