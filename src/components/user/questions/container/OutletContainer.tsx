import { ComponentProps, ReactNode } from "react";

interface OutletContainerProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const OutletContainer = ({ children, className }: OutletContainerProps) => (
  <div className={`flex flex-col w-full min-h-[50rem] max-h-full ${className}`}>
    {children}
  </div>
);

export default OutletContainer;
