import React, { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetRequestSeedlingList from "../../../../../hooks/api/get/useGetRequestSeedlingList";
import DialogRequestSeedling from "../dialog-request-seedling/dialog-request-seedling";
const RequestSeedlingsTable = () => {
  const { data } = useGetRequestSeedlingList();

  return (
    <div>
      <div className="flex justify-end mb-3">
        <DialogRequestSeedling />
      </div>
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={data || []} />
      </div>
    </div>
  );
};

export default RequestSeedlingsTable;
