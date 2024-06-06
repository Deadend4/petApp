import firebase from "src/clients/firebase";
import { useAuthReducer } from "./useAuthContext";
import { DBUser } from "src/types";

export default function useAuth() {
  const { user, status, dispatch } = useAuthReducer();
  const login = async (email: string, password: string) => {
    return firebase.auth.logInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    firebase.auth.logoutFirebase();
  };
  const register = async (email: string, password: string) => {
    const user = await firebase.auth.registerWithEmailAndPassword(
      email,
      password,
    );
    firebase.database.user.setUser({ uid: user.uid });
  };
  const updateUser = async (userData: DBUser) => {
    if (user) {
      await firebase.database.user.setUser(userData);

      dispatch({
        type: "setUser",
        payload: { ...userData, email: user!.email },
      });
    } else {
      throw new Error("Нельзя обновить пользователя!");
    }
  };
  return { user, status, login, logout, register, updateUser };
}
