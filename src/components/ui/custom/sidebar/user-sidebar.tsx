import type { ComponentProps } from "react";

type UserSidebarContainerProps = ComponentProps<"div">;

const UserSidebarContainer = ({
  children,
  className,
  ...props
}: UserSidebarContainerProps) => (
  <div
    className={`sticky top-20 border-r h-[calc(100vh-3.5rem)] min-w-[16rem] py-10 px-5 ${className}`}
    {...props}
  >
    <div className="relative overflow-auto">{children}</div>
  </div>
);

const UserSidebar = ({ ...props }: UserSidebarContainerProps) => {
  return <UserSidebarContainer {...props} />;
};

export default UserSidebar;
