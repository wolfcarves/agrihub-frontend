import { ComponentType, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";
import Loader from "../../icons/Loader";

type AllowedRoles =
  | "member"
  | "guest"
  | "subfarm_head"
  | "farm_head"
  | "farmer"
  | "asst_admin"
  | "admin";

type AdminAccess = {
  id: string;
  farms: boolean;
  learning: boolean;
  event: boolean;
  blog: boolean;
  forums: boolean;
  admin: boolean;
  cuai: boolean;
  home: boolean;
  about: boolean;
  users: boolean;
  privacy_policy: boolean;
  terms_and_conditions: boolean;
  user_feedback: boolean;
  crops: boolean;
  help_center: boolean;
  activity_logs: boolean;
};

export type module_keys = keyof AdminAccess;

export default function withAuthGuard<P extends object>(
  Component: ComponentType<P>,
  allowedRoles: Array<AllowedRoles>,
  module?: module_keys
) {
  const NewComponent = (props: P) => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    const { data: authData, isLoading: isAuthDataLoading } =
      useGetMyProfileQuery();

    const userRole = authData?.id ? (authData?.role as AllowedRoles) : "guest";
    const isAllowed = allowedRoles.includes(userRole);

    if (!isAllowed && userRole !== "admin") {
      navigate("/unauthorize", { replace: true });
    }

    useEffect(() => {
      if (userRole === "asst_admin" && module) {
        const checkAuthorization = authData?.[module];

        if (!checkAuthorization) {
          navigate("/admin/dashboard", { replace: true });
        }
      }

      if (authData?.id && userRole !== "admin") {
        const level = Number(authData?.verification_level) - 1;

        const redirectRoutes = [
          level === 0 && authData?.email !== ""
            ? "/account/verify-email"
            : "/account/verify-otp",
          "/account/setup-account",
          "/account/final-setup"
        ];

        if (pathname === "/account/final-setup" && level === 3)
          navigate("/", { replace: true });

        if (level === 3 && redirectRoutes.includes(pathname)) {
          navigate("/", { replace: true });
        }

        if (level !== 3) navigate(redirectRoutes[level], { replace: true });
      }
    }, [pathname, userRole, isAllowed, authData?.verification_level]);

    if (isAuthDataLoading) {
      return <Loader />;
    }

    return <Component {...props} />;
  };

  return NewComponent;
}
