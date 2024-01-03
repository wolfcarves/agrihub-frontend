import { Outlet, useLocation } from "react-router-dom";
import QuestionSidebar from "@components/user/questions/sidebar/QuestionSidebar";
import QuestionLayoutContainer from "@components/user/questions/container/QuestionLayoutContainer";
import QuestionsAside from "@components/user/questions/aside/QuestionsAside";

const QuestionLayout = () => {
  const pathname = useLocation().pathname;

  const notInto = pathname === "/forum/ask";

  return (
    <>
      <QuestionLayoutContainer>
        {!notInto && <QuestionSidebar />}
        <Outlet />
        {!notInto && <QuestionsAside />}
      </QuestionLayoutContainer>
    </>
  );
};

export default QuestionLayout;
