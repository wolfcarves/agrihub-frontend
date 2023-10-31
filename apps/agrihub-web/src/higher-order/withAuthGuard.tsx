import { FunctionComponent } from "react";

export default function withAuthGuard<P extends object>(
  Component: FunctionComponent<P>
) {
  const NewComponent = (props: P) => {
    return <Component {...props} />;
  };

  return NewComponent;
}
