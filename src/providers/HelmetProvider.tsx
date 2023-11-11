import { ReactNode } from "react";
import { HelmetProvider as AsyncHelmetProvider } from "react-helmet-async";

const HelmetProvider = (props: { children: ReactNode }) => {
  return <AsyncHelmetProvider>{props.children}</AsyncHelmetProvider>;
};

export default HelmetProvider;
