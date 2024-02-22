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

enum RedirectRoutes {
  "/account/verify-email",
  "/account/setup-account",
  "/account/final-setup"
}

export default function withAuthGuard<P extends object>(
  Component: ComponentType<P>,
  allowedRoles: Array<AllowedRoles>
) {
  const NewComponent = (props: P) => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    const { data: authData, isLoading: isAuthDataLoading } =
      useGetMyProfileQuery();

    const userRole = authData?.id ? (authData?.role as AllowedRoles) : "guest";
    const isAllowed = allowedRoles.includes(userRole);

    if (!isAllowed && userRole !== "admin") {
      navigate("/", { replace: true });
    }

    useEffect(() => {
      if (authData?.id && userRole !== "admin") {
        const level = Number(authData?.verification_level) - 1;

        if (pathname === "/account/final-setup" && level === 3)
          navigate("/", { replace: true });

        if (level !== 3) navigate(RedirectRoutes[level], { replace: true });
      }
    }, [pathname, userRole, isAllowed, authData?.verification_level]);

    if (isAuthDataLoading) {
      return <Loader />;
    }

    return <Component {...props} />;
  };

  return NewComponent;
}
