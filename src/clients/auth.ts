import {
  Auth,
  NextOrObserver,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as fbOnAuthStateChanged,
} from "firebase/auth";

export class FirebaseAuth {
  constructor(auth: Auth) {
    this.auth = auth;
  }
  private auth: Auth;
  onAuthStateChanged = (nextOrObserver: NextOrObserver<User>) => {
    return fbOnAuthStateChanged(this.auth, nextOrObserver);
  };
  logoutFirebase = () => {
    signOut(this.auth);
  };

  logInWithEmailAndPassword = async (
    email: string,
    password: string,
  ): Promise<User | null> => {
    try {
      const res = await signInWithEmailAndPassword(this.auth, email, password);
      return res.user;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("Unexpected error");
      }
    }
  };

  registerWithEmailAndPassword = async (
    email: string,
    password: string,
  ): Promise<User> => {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      return res.user;
    } catch (err) {
      if (err instanceof Error) {
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
}
