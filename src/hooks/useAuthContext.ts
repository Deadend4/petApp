import { useContext } from "react";
import { AuthContext } from "src/context/AuthContext";

export function useAuthReducer() {
  return useContext(AuthContext);
}
