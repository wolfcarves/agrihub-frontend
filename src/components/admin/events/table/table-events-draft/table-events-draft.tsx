import React from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetEventsDraftList from "../../../../../hooks/api/get/useGetEventsDraftList";
import { columns } from "./columns";

const TableEventsDraft = () => {
  const { data: eventsData } = useGetEventsDraftList(
    undefined,
    undefined,
    undefined
  );
  return (
    <div>
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={eventsData?.data || []} />
    </div>
  );
};

export default TableEventsDraft;
