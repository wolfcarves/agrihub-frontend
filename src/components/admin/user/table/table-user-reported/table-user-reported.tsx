import React, { useMemo, useState } from "react";
import { Input } from "@components/ui/input";
import { columns } from "./columns";
import useDebounce from "@hooks/utils/useDebounce";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetUserReportList from "../../../../../hooks/api/get/useGetUserReportList";
import StatePagination from "../../../../user/community/state-pagination/state-pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../../ui/custom";

const TableUserReported = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as "pending" | "warned" | undefined,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: userData, isLoading } = useGetUserReportList({
    perpage: "10",
    page: String(params.currentPage),
    search: params.search,
    filter: params.sortBy
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  }, 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Search name..."
          className="max-w-sm"
          value={params.search}
          onChange={e => debouncedSearch(e.target.value)}
        />
        <Select
          onValueChange={val => {
            searchParams.set("sortBy", val);
            setSearchParams(searchParams);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="warned">Warned</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable columns={columns} data={userData?.users || []} />
      <div className="mt-4">
        {userData?.pagination?.total_pages !== 1 && (
          <div className="mt-4">
            <Pagination
              totalPages={Number(userData?.pagination?.total_pages)}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableUserReported;
