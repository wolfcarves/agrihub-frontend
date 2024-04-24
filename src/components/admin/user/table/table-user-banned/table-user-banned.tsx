import React, { useMemo } from "react";
import { Input } from "@components/ui/input";
import { columns } from "./columns";
import useDebounce from "@hooks/utils/useDebounce";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetUserBannedList from "../../../../../hooks/api/get/useGetUserBannedList";
import { Pagination } from "../../../../ui/custom";
import { useSearchParams } from "react-router-dom";

const TableUserBanned = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: userData, isLoading } = useGetUserBannedList({
    perpage: "10",
    page: String(params.currentPage),
    search: params.search,
    filter: "banned"
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search..."
          className="max-w-sm"
          onChange={e => debouncedSearch(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={userData?.users || []} />
      {userData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(userData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default TableUserBanned;
