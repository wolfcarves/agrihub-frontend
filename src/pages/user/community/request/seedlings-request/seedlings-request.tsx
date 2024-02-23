import React from "react";
import withAuthGuard from "../../../../../higher-order/account/withAuthGuard";
import RequestSeedlingsTable from "../../../../../components/user/community/request-seedlings/request-seedlings-table/request-seedlings-table";

const SeedlingsRequest = () => {
  return (
    <div className="md:px-10 px-2 py-6 ">
      <div className="flex justify-between">
        <h3 className=" font-poppins-semibold">Seedlings Request</h3>
      </div>
      <hr className="my-3 border-primary" />
      <RequestSeedlingsTable />
    </div>
  );
};

export default withAuthGuard(SeedlingsRequest, ["farm_head"]);
