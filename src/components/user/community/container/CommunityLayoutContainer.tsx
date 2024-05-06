import type { ReactNode } from "react";

const CommunityLayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sm:container w-full flex justify-between">{children}</div>
  );
};

export default CommunityLayoutContainer;
