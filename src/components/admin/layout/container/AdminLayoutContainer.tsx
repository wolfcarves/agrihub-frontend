import { ReactNode } from "react";

const AdminLayoutContainer = (props: { children: ReactNode }) => {
  return <div className="flex h-[100dvh] w-full">{props.children}</div>;
};

export default AdminLayoutContainer;
