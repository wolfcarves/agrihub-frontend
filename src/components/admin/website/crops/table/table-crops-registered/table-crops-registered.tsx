import React from "react";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "./columns-crops-registered";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";

const TableCropsRegistered = () => {
  const { data: cropData } = useGetCropsQuery();
  return (
    <div>
      <DataTable columns={columns} data={cropData || []} />
    </div>
  );
};

export default TableCropsRegistered;
