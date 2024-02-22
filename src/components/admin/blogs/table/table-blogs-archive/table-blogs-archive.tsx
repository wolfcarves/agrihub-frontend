import React, { useState } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetBlogsArchiveList from "../../../../../hooks/api/get/useGetBlogsArchiveList";
import useDebounce from "../../../../../hooks/utils/useDebounce";

const TableBlogsArchive = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: blogData } = useGetBlogsArchiveList(search, "1", "20");
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
      <DataTable columns={columns} data={blogData?.data || []} />
    </div>
  );
};

export default TableBlogsArchive;
