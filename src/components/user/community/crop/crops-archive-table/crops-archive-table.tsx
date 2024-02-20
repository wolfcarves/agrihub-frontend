import React, { useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetFarmCropsArchiveList from "../../../../../hooks/api/get/useGetFarmCropsArchiveList";
const CropsArchiveTable = () => {
  const { data: archiveCrops } = useGetFarmCropsArchiveList();

  return (
    <div>
      <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
        <h3 className="ms-2 font-poppins-medium">Crops Archieve List</h3>
      </div>
      <DataTable columns={columns} data={archiveCrops || []} />
    </div>
  );
};

export default CropsArchiveTable;
