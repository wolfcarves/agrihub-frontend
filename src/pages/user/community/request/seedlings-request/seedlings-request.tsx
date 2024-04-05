import React from "react";
import withAuthGuard from "../../../../../higher-order/account/withAuthGuard";
import RequestSeedlingsTable from "../../../../../components/user/community/request-seedlings/request-seedlings-table/request-seedlings-table";

const SeedlingsRequest = () => {
  return (
    <>
      <RequestSeedlingsTable />
    </>
  );
};

export default withAuthGuard(SeedlingsRequest, ["farm_head"]);
