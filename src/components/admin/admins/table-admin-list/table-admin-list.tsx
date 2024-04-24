import React, { useMemo } from "react";
import { columns } from "./columns";
import useDebounce from "@hooks/utils/useDebounce";
import { DataTable } from "../../../ui/custom/data-table/data-table";
import { Input } from "../../../ui/input";
import useGetUserAdminListQuery from "../../../../hooks/api/get/useGetUserAdminListQuery";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../ui/custom";

const TableAdminList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);

  const { data: adminData, isLoading } = useGetUserAdminListQuery({
    perpage: "10",
    page: String(params.currentPage),
    search: params.search,
    filter: "active"
  });
  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);
  return (
    <div>
      <Input
        placeholder="Search..."
        className="max-w-sm my-4"
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={adminData?.users || []} />
      {adminData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(adminData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default TableAdminList;
