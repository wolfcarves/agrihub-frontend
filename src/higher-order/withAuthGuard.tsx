import { ComponentType } from "react";
import useAuthData from "@hooks/common/useAuthData";

import Unauthorized from "@pages/user/common/unauthorized";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center ">
      Loading...
    </div>
  );
};

export default function withAuthGuard<P extends object>(
  Component: ComponentType<P>
) {
  const NewComponent = (props: P) => {
    const { data, isLoading, isFetched } = useAuthData();

    if (isLoading) {
      return <Loading />;
    }

    if (isFetched && data === undefined) {
      return <Unauthorized />;
    }

    return <Component {...props} />;
  };

  return NewComponent;
}
