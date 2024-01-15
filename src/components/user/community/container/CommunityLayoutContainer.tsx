import {
  UserFooter,
  UserHeader,
  UserResponsiveContainer
} from "@components/ui/custom";
import type { ReactNode } from "react";

const CommunityLayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserHeader />
      <UserResponsiveContainer>{children}</UserResponsiveContainer>
      {/* <UserFooter /> */}
    </>
  );
};

export default CommunityLayoutContainer;
