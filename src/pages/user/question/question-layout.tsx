import { Outlet } from "react-router-dom";
import { UserAside } from "@components/ui/custom";
import QuestionSidebar from "@components/user/questions/sidebar/QuestionSidebar";
import QuestionLayoutContainer from "@components/user/questions/container/QuestionLayoutContainer";
import { ScrollToTop } from "@components/ui/custom";

const QuestionLayout = () => {
  return (
    <>
      <QuestionLayoutContainer>
        <ScrollToTop />
        <QuestionSidebar />
        <Outlet />
        <UserAside>Wait lang</UserAside>
      </QuestionLayoutContainer>
    </>
  );
};

export default QuestionLayout;
