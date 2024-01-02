import { ComponentProps } from "react";

interface UserResponsiveContainer extends ComponentProps<"div"> {}

const UserReponsiveContainer = ({
  children,
  className
}: UserResponsiveContainer) => {
  return <div className={`${className} container flex`}>{children}</div>;
};

export default UserReponsiveContainer;
