import { UserStatus, UserType } from "src/types";

interface AuthReducerState {
  user: UserType | null;
  status: UserStatus;
}
interface AuthReducerActionStatus {
  type: "setStatus";
  payload: UserStatus;
}
interface AuthReducerActionUser {
  type: "setUser";
  payload: UserType | null;
}

export type AuthReducerAction = AuthReducerActionStatus | AuthReducerActionUser;
export default function authReducer(
  state: AuthReducerState,
  action: AuthReducerAction,
): AuthReducerState {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        user: { ...(state.user as UserType), ...(action.payload as UserType) },
      };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      return state;
  }
}
