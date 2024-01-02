import { ReactNode } from "react";
import UserResponsiveContainer from "@components/ui/custom/container/user-reponsive-container";
import { UserHeader } from "@components/ui/custom";

const QuestionLayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserHeader />
      <UserResponsiveContainer>{children}</UserResponsiveContainer>
      <div className="h-[30rem] bg-neutral-800" />
    </>
  );
};

export default QuestionLayoutContainer;
