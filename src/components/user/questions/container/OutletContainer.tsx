import { ReactNode } from "react";

const OutletContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col w-full min-h-full px-0  md:px-7 xl:px-16 py-10 ">
    {children}
  </div>
);

export default OutletContainer;
