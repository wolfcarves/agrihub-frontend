import type { ReactNode } from "react";

const UserAsideContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col w-full max-w-[225px] min-h-full px-2 pt-10 border-l">
    {children}
  </div>
);

const UserAside = () => {
  return <UserAsideContainer>Aside</UserAsideContainer>;
};

export default UserAside;
