import { Auth, AuthContextValue } from "@providers/AuthProvider";
import { useContext } from "react";

export default function useAuthData() {
  const data = useContext(Auth) as AuthContextValue;

  return data;
}
