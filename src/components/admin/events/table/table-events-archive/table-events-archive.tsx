import React, { useState } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetEventArchiveList from "../../../../../hooks/api/get/useGetEventArchiveList";
import useDebounce from "../../../../../hooks/utils/useDebounce";

const TableEventsArchive = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: eventsData } = useGetEventArchiveList(search, "1", "20");
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

export default TableEventsArchive;
