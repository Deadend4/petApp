import {
  logInWithEmailAndPassword,
  logoutFirebase,
  registerWithEmailAndPassword,
} from "src/utils/firebase";
import { useAuthReducer } from "./useAuthContext";

export default function useAuth() {
  const { user, status } = useAuthReducer();
  const login = async (email: string, password: string) => {
    return logInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    logoutFirebase();
  };
  const register = async (email: string, password: string) => {
    return registerWithEmailAndPassword(email, password);
  };
  return { user, status, login, logout, register };
}
