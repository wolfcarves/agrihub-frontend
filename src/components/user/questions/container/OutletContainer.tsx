import { ReactNode } from "react";

const OutletContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col w-full min-h-full overflow-auto px-16 py-10">
    {children}
  </div>
);

export default OutletContainer;
