import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserSidebar } from "@components/ui/custom";
import QuestionLayoutContainer from "@components/user/questions/container/QuestionLayoutContainer";
import UserAside from "@components/ui/custom/aside/UserAside";

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
// scrollbar-thin scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full
export default QuestionLayout;
