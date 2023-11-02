import { createContext, ReactNode } from "react";
import useGetUserQuery from "@hooks/api/useGetUserQuery";
import { UserSchema } from "@api/openapi";

export type AuthContextValue = {
  data?: UserSchema;
  isLoading?: boolean;
  isFetched?: boolean;
  error: Record<string, any>;
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
    error: userError as Record<string, any>
  };

  return <Auth.Provider value={value}>{props.children}</Auth.Provider>;
};

export default AuthProvider;
