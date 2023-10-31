import { UserSchema } from "@api/openapi";
import { Auth } from "@providers/AuthProvider";
import { useContext } from "react";

export default function useAuth() {
  const user = useContext(Auth) as UserSchema;

  return user;
}
