export type UserStatus = "authenticated" | "unauthenticated" | "loading";

export interface DBUser {
  uid: string;
  phoneName?: string;
  name?: string;
  surname?: string;
  photo?: string;
  bio?: string;
  age?: number;
}

export interface UserType extends DBUser {
  email: string;
}
