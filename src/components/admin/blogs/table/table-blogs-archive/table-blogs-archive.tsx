import React from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetBlogsArchiveList from "../../../../../hooks/api/get/useGetBlogsArchiveList";

const TableBlogsArchive = () => {
  const { data: blogData } = useGetBlogsArchiveList(
    undefined,
    undefined,
    undefined
  );
  return (
    <div>
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={blogData?.data || []} />
    </div>
  );
};

export default TableBlogsArchive;
