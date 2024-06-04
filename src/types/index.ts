import { User } from "firebase/auth";

export type UserType = User;

export type UserStatus = "authenticated" | "unauthenticated" | "loading";
