import { createContext, ReactNode, useEffect } from "react";
import useGetUserQuery from "@hooks/api/get/useGetMyProfileQuery";
import { UserSchema } from "@api/openapi";

export type AuthContextValue = {
  data?: UserSchema;
  isLoading?: boolean;
  isFetched?: boolean;
  errorMessage: string;
};

export const Auth = createContext<AuthContextValue | undefined>(undefined);

const AuthProvider = (props: { children: ReactNode }) => {
  const {
    data: userData,
    isFetched: isUserDataFetched,
    isLoading: userDataLoading,
    error: userError
  } = useGetUserQuery();

  const value: AuthContextValue = {
    data: userData,
    isFetched: isUserDataFetched,
    isLoading: userDataLoading,
    errorMessage: String((userError as any)?.body.message)
  };

  return <Auth.Provider value={value}>{props.children}</Auth.Provider>;
};

export default AuthProvider;
