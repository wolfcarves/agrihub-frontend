import { Outlet, useLocation } from "react-router-dom";
import QuestionSidebar from "@components/user/questions/sidebar/QuestionSidebar";
import QuestionLayoutContainer from "@components/user/questions/container/QuestionLayoutContainer";
import QuestionsAside from "@components/user/questions/aside/QuestionsAside";

const QuestionLayout = () => {
  const pathname = useLocation().pathname;

  const sidebarNoneRenderPaths = ["/forum/ask"];
  const asideNoneRenderPaths = ["/forum/tags"];
  const sidebarRender = sidebarNoneRenderPaths.includes(pathname);
  const asideRender = asideNoneRenderPaths.includes(pathname);

  return (
    <>
      <QuestionLayoutContainer>
        {!sidebarRender && <QuestionSidebar />}
        <Outlet />
        {!asideRender && <QuestionsAside />}
      </QuestionLayoutContainer>
    </>
  );
};

export default QuestionLayout;
