import { ComponentType, useEffect } from "react";
import useAuth from "@hooks/useAuth";
import Unauthorized from "@pages/user/common/unauthorized";
import { Navigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { GET_USER_KEY } from "@hooks/api/get/useGetMyProfileQuery";
import ActivityIndicator from "@icons/ActivityIndicator";

export default function withAuthGuard<P extends object>(
  Component: ComponentType<P>
) {
  const NewComponent = (props: P) => {
    const { data: authData, isLoading, isFetched, errorMessage } = useAuth();
    const verificationLevel = authData?.verification_level;
    const pathname = window.location.pathname;

    const queryClient = useQueryClient();

    //Fetches auth data every 3 sec
    useEffect(() => {
      const interval = setInterval(
        () => queryClient.invalidateQueries({ queryKey: [GET_USER_KEY()] }),
        5000
      );

      return () => {
        clearTimeout(interval);
      };
    }, [queryClient]);

    switch (verificationLevel) {
      case "1":
        if (pathname !== "/account/verify-email") {
          return <Navigate to={{ pathname: "/account/verify-email" }} />;
        }
        break;
      case "2":
        if (pathname !== "/account/setup-account") {
          return <Navigate to={{ pathname: "/account/setup-account" }} />;
        }
        break;
      case "3":
        if (pathname !== "/account/final-setup") {
          return <Navigate to={{ pathname: "/account/final-setup" }} />;
        }
        break;
      case "4":
        if (pathname !== "/questions") {
          return <Navigate to={{ pathname: "/questions" }} />;
        }
        break;
      default:
        return <Navigate to={{ pathname: "/account/verify-email" }} />;
    }

    console.log(authData?.verification_level, pathname);

    if (isFetched && errorMessage === "No Auth") {
      return <Unauthorized />;
    }

    if (isLoading || authData === undefined) {
      return (
        <>
          <ActivityIndicator />
          <Component {...props} />
        </>
      );
    }

    return <Component {...props} />;
  };

  return NewComponent;
}
