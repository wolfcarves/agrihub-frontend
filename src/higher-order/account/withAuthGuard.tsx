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
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    const { data: authData, isFetched: isAuthDataFetched } =
      useGetMyProfileQuery();

    useEffect(() => {
      const verificationLevel = authData?.verification_level;
      const userRole = authData?.role as AllowedRoles;

      const isAllowed = allowedRoles.includes(userRole ?? "guest");

      if (isAuthDataFetched) {
        if (!isAllowed) {
          navigate("/", { replace: true });
        }

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

        //force redirect to account proccess unless the verification is already 4
        if (verificationLevel && pathname !== respectivePath) {
          if (verificationLevel !== "4") {
            navigate(respectivePath, { replace: true });
          }
        }

        // Redirect user to homepage when he tried to access login,signup etc while the verif. level is already 4
        if (
          pathname ===
            verificationLevelPaths[
              "0" as keyof typeof verificationLevelPaths
            ] ||
          pathname ===
            verificationLevelPaths[
              "1" as keyof typeof verificationLevelPaths
            ] ||
          pathname ===
            verificationLevelPaths["2" as keyof typeof verificationLevelPaths]
        ) {
          navigate("/", { replace: true });
        }
      }
    }, [
      authData?.role,
      authData?.verification_level,
      isAuthDataFetched,
      navigate,
      pathname
    ]);

    return <Component {...props} />;
  };

  return NewComponent;
}
