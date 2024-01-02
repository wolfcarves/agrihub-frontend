import type { ReactNode } from "react";

const UserAside = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sticky top-20 h-[calc(100vh-3.5rem)] w-full max-w-[200px] py-10">
      <div className="relative overflow-hidden h-full ">{children}</div>
    </div>
  );
};

export default UserAside;
