import React from "react";

import { Provider } from "react-redux";
import { store } from "@redux/store";

const ReduxProvider = (props: { children: React.ReactNode }) => {
  return <Provider {...{ store }}>{props.children}</Provider>;
};

export default ReduxProvider;
