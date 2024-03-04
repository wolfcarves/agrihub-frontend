import React, { useState } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetEventsDraftList from "../../../../../hooks/api/get/useGetEventsDraftList";
import { columns } from "./columns";
import useGetEventPublishedListQuery from "../../../../../hooks/api/get/useGetEventPublishedListQuery";
import useDebounce from "../../../../../hooks/utils/useDebounce";

const TableEventsPublished = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: eventsData } = useGetEventPublishedListQuery({
    search: search,
    page: "1",
    perpage: "20"
  });

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  return (
    <div>
      <Input
        placeholder="Search title..."
        className="max-w-sm my-4"
        value={search}
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={eventsData?.data || []} />
    </div>
  );
};

export default TableEventsPublished;
