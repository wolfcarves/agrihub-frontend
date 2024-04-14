import { ReactNode } from "react";

const AdminLayoutContainer = (props: { children: ReactNode }) => {
  return <div className="flex max-h-[100vh] w-full">{props.children}</div>;
};

export default AdminLayoutContainer;
