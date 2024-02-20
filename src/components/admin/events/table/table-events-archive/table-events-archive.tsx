import React from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetEventArchiveList from "../../../../../hooks/api/get/useGetEventArchiveList";

const TableEventsArchive = () => {
  const { data: eventsData } = useGetEventArchiveList(
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

export default TableEventsArchive;
