import { ComponentProps } from "react";

interface UserResponsiveContainer extends ComponentProps<"div"> {}

const UserReponsiveContainer = ({
  children,
  className
}: UserResponsiveContainer) => {
  return <div className={`${className} container p-0 flex`}>{children}</div>;
};

export default UserReponsiveContainer;
