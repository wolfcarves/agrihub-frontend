import React from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetEventsDraftList from "../../../../../hooks/api/get/useGetEventsDraftList";
import { columns } from "./columns";
import useGetEventPublishedListQuery from "../../../../../hooks/api/get/useGetEventPublishedListQuery";

const TableEventsPublished = () => {
  const { data: eventsData } = useGetEventPublishedListQuery({
    search: undefined,
    page: undefined,
    perpage: undefined
  });
  console.log(eventsData);
  return (
    <div>
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={eventsData || []} />
    </div>
  );
};

export default TableEventsPublished;
