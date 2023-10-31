import { UserSchema } from "@api/openapi";
import useGetUserQuery from "@hooks/api/useGetUserQuery";
import { createContext, ReactNode } from "react";

type AuthContext = Record<string, any> | null;

export const Auth = createContext<AuthContext | undefined>(undefined);

const AuthProvider = (props: { children: ReactNode }) => {
  const { data: userData } = useGetUserQuery();

  return (
    <Auth.Provider value={userData as UserSchema}>
      {props.children}
    </Auth.Provider>
  );
};

export default AuthProvider;
