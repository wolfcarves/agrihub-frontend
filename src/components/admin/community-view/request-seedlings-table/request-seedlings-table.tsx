import React, { useState } from "react";
import { columns } from "./columns";

import { useParams } from "react-router-dom";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import DialogRequestSeedling from "../../../user/community/request-seedlings/dialog-request-seedling/dialog-request-seedling";
import useGetRequestSeedlingList from "../../../../hooks/api/get/useGetRequestSeedlingList";
const RequestSeedlingsTable = () => {
  const { id } = useParams();
  const { data } = useGetRequestSeedlingList(id || "");
  console.log(data);

  return (
    <div>
      {/* <div className="flex justify-end mb-3">
        <DialogRequestSeedling />
      </div> */}
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={data || []} />
      </div>
    </div>
  );
};

export default RequestSeedlingsTable;
