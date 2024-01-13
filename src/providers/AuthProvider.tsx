import { createContext, ReactNode, useContext } from "react";
import { UserSchema } from "@api/openapi";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";

export type AuthContextValue = {
  data?: UserSchema;
  isFetching?: boolean;
  isFetched?: boolean;
  error?: unknown;
  isAuthenticated?: boolean;
};

export const Auth = createContext<AuthContextValue | undefined>(undefined);

const AuthProvider = (props: { children: ReactNode }) => {
  const {
    data: userData,
    isFetched: isUserDataFetched,
    isFetching: userDataLoading,
    error: userError
  } = useGetMyProfileQuery();

  const isAuthenticated = !!userData;

  const value: AuthContextValue = {
    data: userData,
    isFetched: isUserDataFetched,
    isFetching: userDataLoading,
    error: userError,
    isAuthenticated
  };

  return <Auth.Provider value={value}>{props.children}</Auth.Provider>;
};

export default AuthProvider;

export const UserAuth = () => {
  return useContext(Auth);
};
