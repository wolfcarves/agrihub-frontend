import { ReactNode } from "react";

const UserResponsiveContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex overflow-hidden h-full">{children}</div>
  );
};

export default UserResponsiveContainer;
