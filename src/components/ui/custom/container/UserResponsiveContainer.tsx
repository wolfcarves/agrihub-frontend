import { ReactNode } from "react";

const UserResponsiveContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container flex">{children}</div>;
};

export default UserResponsiveContainer;
