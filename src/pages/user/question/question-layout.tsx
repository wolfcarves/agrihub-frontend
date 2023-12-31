import { ReactNode } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserSidebar } from "@components/ui/custom";
import UserAside from "@components/ui/custom/aside/UserAside";
import UserResponsiveContainer from "@components/ui/custom/container/UserResponsiveContainer";

const QuestionLayoutContainer = ({ children }: { children: ReactNode }) => {
  return <UserResponsiveContainer>{children}</UserResponsiveContainer>;
};

const QuestionLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is exactly '/community'
    if (location.pathname === "/forums") {
      navigate("/forum/list");
    }
  }, [navigate, location.pathname]);

  return (
    <QuestionLayoutContainer>
      <UserSidebar />
      <Outlet />
      <UserAside />
    </QuestionLayoutContainer>
  );
};

export default QuestionLayout;
