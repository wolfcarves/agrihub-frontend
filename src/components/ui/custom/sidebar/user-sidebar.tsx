import type { ComponentProps } from "react";

type UserSidebarContainerProps = ComponentProps<"div">;

const UserSidebarContainer = ({
  children,
  className,
  ...props
}: UserSidebarContainerProps) => (
  <div
    className={`sticky top-20 border-r h-[calc(100vh-3.5rem)] w-full sm:max-w-[250px] py-10 px-5 ${className}`}
    {...props}
  >
    <div className="relative overflow-hidden h-full">{children}</div>
  </div>
);

const UserSidebar = ({ ...props }: UserSidebarContainerProps) => {
  return <UserSidebarContainer {...props} />;
};

export default UserSidebar;
