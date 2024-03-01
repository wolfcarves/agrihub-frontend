import React, { useState } from "react";
import { Input } from "@components/ui/input";
import { columns } from "./columns";
import useDebounce from "@hooks/utils/useDebounce";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetUserActiveList from "../../../../../hooks/api/get/useGetUserActiveList";
import StatePagination from "../../../../user/community/state-pagination/state-pagination";

const TableUserActive = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const [page, setPage] = useState<number>(1);
  const { data: userData, isLoading } = useGetUserActiveList({
    perpage: "20",
    page: String(page),
    search: search,
    filter: undefined
  });
  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search title..."
          className="max-w-sm"
          value={search}
          onChange={e => debouncedSearch(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={userData?.users || []} />
      <div className="mt-4">
        {!isLoading && (
          <StatePagination
            currentPage={Number(userData?.pagination?.page)}
            totalPages={Number(userData?.pagination?.total_pages)}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default TableUserActive;
