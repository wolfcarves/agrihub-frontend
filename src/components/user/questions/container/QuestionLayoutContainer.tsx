import { ReactNode } from "react";
import UserResponsiveContainer from "@components/ui/custom/container/user-reponsive-container";

const QuestionLayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserResponsiveContainer>{children}</UserResponsiveContainer>
    </>
  );
};

export default QuestionLayoutContainer;
