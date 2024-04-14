import React from "react";
import withAuthGuard from "../../../../../higher-order/account/withAuthGuard";
import RequestToolsTable from "../../../../../components/user/community/request-tools/request-tools-table/request-tools-table";

const ToolsRequest = () => {
  return (
    <>
      <RequestToolsTable />
    </>
  );
};

export default withAuthGuard(ToolsRequest, ["farm_head"]);
