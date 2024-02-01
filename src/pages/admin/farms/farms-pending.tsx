import React from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const FarmsPending = () => {
  return <div></div>;
};

export default withAuthGuard(FarmsPending, ["admin", "asst_admin"]);
