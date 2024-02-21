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

    const {
      data: authData,
      isFetched: isAuthDataFetched,
      isLoading: isAuthDataLoading
    } = useGetMyProfileQuery();

    useEffect(() => {
      const userRole = (authData?.role as AllowedRoles) ?? "guest";
      const isAllowed = allowedRoles.includes(userRole);

      if (!isAllowed) {
        navigate("/", { replace: true });
      }

      //has session
      if (authData?.id && isAuthDataFetched && userRole !== "admin") {
        const level = Number(authData?.verification_level) - 1;

        if (level === 4) return;

        navigate(RedirectRoutes[level], { replace: true });
      }
    }, [navigate, pathname, authData]);

    if (isAuthDataLoading) {
      return <Loader />;
    }

    return <Component {...props} />;
  };

  return NewComponent;
}
