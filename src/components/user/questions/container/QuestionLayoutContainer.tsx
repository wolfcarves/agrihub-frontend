import { ReactNode } from "react";
import UserResponsiveContainer from "@components/ui/custom/container/user-reponsive-container";

const QuestionLayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserResponsiveContainer className="px-3">
        {children}
      </UserResponsiveContainer>
    </>
  );
};

export default QuestionLayoutContainer;
