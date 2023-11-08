import { Auth, AuthContextValue } from "@providers/AuthProvider";
import { useContext } from "react";

export default function useAuth() {
  const data = useContext(Auth) as AuthContextValue;

  return data;
}
