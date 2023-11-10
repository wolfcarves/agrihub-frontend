import { Auth, AuthContextValue } from "@providers/AuthProvider";
import { useContext } from "react";

export default function useAuth() {
  return useContext(Auth) as AuthContextValue;
}
