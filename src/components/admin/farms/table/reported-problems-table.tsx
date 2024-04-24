import React, { useMemo } from "react";
// import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { useSearchParams } from "react-router-dom";
import { columns } from "./reported-problems-column";
import { DataTable } from "../../../ui/custom/data-table/data-table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";

import { Pagination } from "../../../ui/custom";
import useDebounce from "@hooks/utils/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { FarmProblemsService } from "../../../../api/openapi";
import { Input } from "@components/ui/input";
const AdminFarmReportedProblems = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as "pending" | "resolved" | undefined,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);

  const { data: farmProblems, isLoading } = useQuery({
    queryKey: ["GET_PROBLEM_LIST_COMMON", params],
    queryFn: async () => {
      const data = await FarmProblemsService.getApiFarmProblemsReportedList({
        search: params.search,
        page: String(params.currentPage),
        perpage: "10",
        filter: params.sortBy
      });

      return data;
    },
    keepPreviousData: true
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);
  return (
    <div>
      <div className="flex justify-between gap-3 py-4">
        <Input
          placeholder="Search..."
          className="max-w-sm"
          onChange={e => debouncedSearch(e.target.value)}
        />
        <div className="flex gap-3">
          <Select
            onValueChange={val => {
              searchParams.set("sortBy", val);
              setSearchParams(searchParams);
            }}
          >
            <SelectTrigger className="w-[120px] focus-visible:ring-0 focus:ring-0">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={farmProblems?.data || []} />
      </div>
      {farmProblems?.pagination?.total_pages !== 1 && (
        <Pagination
          totalPages={Number(farmProblems?.pagination?.total_pages)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default AdminFarmReportedProblems;
