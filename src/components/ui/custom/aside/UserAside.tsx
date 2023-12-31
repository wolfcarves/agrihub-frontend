import type { ReactNode } from "react";

const UserAsideContainer = ({ children }: { children: ReactNode }) => (
  <div className="sticky top-14 h-[calc(100vh-3.5rem)] w-full max-w-[200px] py-10">
    <div className="relative overflow-hidden h-full ">{children}</div>
  </div>
);

const UserAside = () => {
  return <UserAsideContainer>Aside</UserAsideContainer>;
};

export default UserAside;
