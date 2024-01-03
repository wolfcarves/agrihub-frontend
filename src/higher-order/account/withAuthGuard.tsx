import { ComponentType } from "react";
import Unauthorized from "@pages/user/common/unauthorized";
import { useNavigate } from "react-router-dom";
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
    const { data: authData } = useGetMyProfileQuery();

    const verificationLevel = authData?.verification_level;
    const userRole = authData?.role as AllowedRoles;

    const isAllowed = allowedRoles.includes(userRole ?? "guest");

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

    if (verificationLevel && location.pathname !== respectivePath) {
      if (verificationLevel !== "4") {
        navigate(respectivePath, { replace: true });
      }
    }

    //Always allow guest at any cost
    if (allowedRoles.includes("guest")) {
      return <Component {...props} />;
    }

    if (!isAllowed) return <Unauthorized />;

    return <Component {...props} />;
  };

  return NewComponent;
}
