import { ComponentType } from "react";
import Unauthorized from "@pages/user/common/unauthorized";
import { Navigate } from "react-router-dom";
import useGetMyProfileQuery from "@hooks/api/get/useGetMyProfileQuery";
import ActivityIndicator from "@icons/ActivityIndicator";

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
    const { data: authData, isLoading, error } = useGetMyProfileQuery();

    const verificationLevel = authData?.verification_level;
    const role = authData?.role as AllowedRoles;
    const pathname = window.location.pathname;

    if (error) {
      if (
        (error as any).body.message === "No Auth" ||
        (error as any).body.message === "Unauthorized"
      ) {
        return <Unauthorized />;
      }
    }

    if (isLoading || authData === undefined) {
      return (
        <>
          <ActivityIndicator />
        </>
      );
    }

    const isAuthorized = allowedRoles.includes(role || "guest");

    if (!isAuthorized) {
      return <Unauthorized />;
    }

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
        return <Component {...props} />;
      default:
        return <Unauthorized />;
    }

    return <Component {...props} />;
  };

  return NewComponent;
}
