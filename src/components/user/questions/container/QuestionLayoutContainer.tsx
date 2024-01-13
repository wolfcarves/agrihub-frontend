import { ReactNode } from "react";
import UserResponsiveContainer from "@components/ui/custom/container/user-reponsive-container";
import { UserFooter, UserHeader } from "@components/ui/custom";

const QuestionLayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserHeader />
      <UserResponsiveContainer ntainer>{children}</UserResponsiveContainer>
      <UserFooter />
    </>
  );
};

export default QuestionLayoutContainer;
