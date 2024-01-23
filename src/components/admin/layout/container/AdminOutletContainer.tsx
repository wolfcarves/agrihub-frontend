import { ComponentProps, ReactNode } from "react";

interface OutletContainerProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const AdminOutletContainer = ({
  children,
  className
}: OutletContainerProps) => (
  <div
    className={`overflow-y-auto custom-scroll h-full px-3 md:px-7 xl:px-13 py-10 ${className}`}
  >
    {children}
  </div>
);

export default AdminOutletContainer;
