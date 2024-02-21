import React from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetBlogsPublishList from "../../../../../hooks/api/get/useGetBlogsPublishList";

const TableBlogsPublished = () => {
  const { data: blogsData } = useGetBlogsPublishList(
    undefined,
    undefined,
    undefined
  );
  return (
    <div>
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={blogsData?.data || []} />
    </div>
  );
};

export default TableBlogsPublished;
