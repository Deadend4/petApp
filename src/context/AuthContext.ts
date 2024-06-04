import { createContext } from "react";
import { UserStatus, UserType } from "types/index";
import { AuthReducerAction } from "./AuthReducer";

interface AuthContext {
  user: UserType | null;
  status: UserStatus;
  dispatch: React.Dispatch<AuthReducerAction>;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  status: "loading",
  dispatch: () => {},
});
