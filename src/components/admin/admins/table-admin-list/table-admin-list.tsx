import React, { useState } from "react";
import { columns } from "./columns";
import useDebounce from "@hooks/utils/useDebounce";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import { Input } from "../../../ui/input";
import useGetUserAdminListQuery from "../../../../hooks/api/get/useGetUserAdminListQuery";

const TableAdminList = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const { data: adminData } = useGetUserAdminListQuery({
    perpage: "20",
    page: "1",
    search: search,
    filter: "active"
  });
  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);
  return (
    <div>
      <Input
        placeholder="Search..."
        className="max-w-sm my-4"
        value={search}
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={adminData?.users || []} />
    </div>
  );
};

export default TableAdminList;
