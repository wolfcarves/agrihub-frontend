import { createContext, ReactNode } from "react";
import useGetUserQuery from "@hooks/api/get/useGetMyProfileQuery";
import { UserSchema } from "@api/openapi";

export type AuthContextValue = {
  data?: UserSchema;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: unknown;
};

export const Auth = createContext<AuthContextValue | undefined>(undefined);

const AuthProvider = (props: { children: ReactNode }) => {
  const {
    data: userData,
    isFetched: isUserDataFetched,
    isFetching: userDataLoading,
    error: userError
  } = useGetUserQuery();

  const value: AuthContextValue = {
    data: userData,
    isFetched: isUserDataFetched,
    isFetching: userDataLoading,
    error: userError
  };

  return <Auth.Provider value={value}>{props.children}</Auth.Provider>;
};

export default AuthProvider;
