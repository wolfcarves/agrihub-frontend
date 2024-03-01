import React, { useState } from "react";
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

const TableUserReported = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const [filter, setFilter] = useState<string>("pending");
  const [page, setPage] = useState<number>(1);
  const { data: userData, isLoading } = useGetUserReportList({
    perpage: "10",
    page: String(page),
    search: search,
    filter: filter as "pending" | "warned" | undefined
  });

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value);
  }, 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Search title..."
          className="max-w-sm"
          value={search}
          onChange={e => debouncedSearch(e.target.value)}
        />
        <Select onValueChange={val => setFilter(val)} defaultValue={filter}>
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

export default TableUserReported;
