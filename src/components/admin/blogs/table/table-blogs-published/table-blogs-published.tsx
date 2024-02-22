import React, { useState } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetBlogsPublishList from "../../../../../hooks/api/get/useGetBlogsPublishList";
import useDebounce from "../../../../../hooks/utils/useDebounce";

const TableBlogsPublished = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: blogsData } = useGetBlogsPublishList(search, "1", "20");
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
      <DataTable columns={columns} data={blogsData?.data || []} />
    </div>
  );
};

export default TableBlogsPublished;
