import { ComponentType, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";

type AllowedRoles =
  | "member"
  | "guest"
  | "subfarm_head"
  | "farm_head"
  | "farmer"
  | "asst_admin"
  | "admin";

export default function withAuthGuard<P extends object>(
  Component: ComponentType<P>,
  allowedRoles: Array<AllowedRoles>
) {
  const NewComponent = (props: P) => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    const {
      data: authData,
      isFetched: isAuthDataFetched,
      isError
    } = useGetMyProfileQuery();

    useEffect(() => {
      //has user data
      if (isAuthDataFetched && !isError) {
        const verificationLevel = authData?.verification_level as
          | "1"
          | "2"
          | "3"
          | "4";
        const userRole = authData?.role as AllowedRoles;
        const isAllowed = allowedRoles.includes(userRole);

        const redirectPaths = [
          "/account/verify-email",
          "/account/setup-account",
          "/account/final-setup"
        ];

        switch (verificationLevel) {
          case "1":
            if (pathname !== redirectPaths["0"])
              navigate(redirectPaths[0], { replace: true });
            break;
          case "2":
            if (pathname !== redirectPaths["1"])
              navigate(redirectPaths[1], { replace: true });
            break;
          case "3":
            if (pathname !== redirectPaths["2"])
              navigate(redirectPaths[2], { replace: true });
            break;
          case "4":
            if (pathname === redirectPaths["2"])
              navigate("/forum", { replace: true });
            break;
        }

        if (!isAllowed && userRole) {
          navigate("/", { replace: true });
        }
      }
    }, [
      authData,
      authData?.role,
      authData?.verification_level,
      isAuthDataFetched,
      isError,
      navigate,
      pathname
    ]);

    return <Component {...props} />;
  };

  return NewComponent;
}

/*
const verificationLevelPaths = {
          "1": "/account/verify-email",
          "2": "/account/setup-account",
          "3": "/account/final-setup",
          "4": "/"
        };

        const respectivePath =
          verificationLevelPaths[
            verificationLevel as keyof typeof verificationLevelPaths
          ];

        if (pathname !== respectivePath && verificationLevel !== "4") {
          navigate(respectivePath, { replace: true });
        }

        if (!isAllowed) {
          navigate("/", { replace: true });
        }
*/
