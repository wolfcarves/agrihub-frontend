import React, { useMemo, useState } from "react";
// import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { useParams, useSearchParams } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
// import StatePagination from "../../state-pagination/state-pagination";

import useGetProblemsCommunityList from "../../../../../hooks/api/get/useGetProblemsCommunityList";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import DialogAddProblem from "../dialog-add-problem/dialog-add-problem";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { Input } from "../../../../ui/input";
import { Pagination } from "../../../../ui/custom";
const CommunityProblemTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as "pending" | "resolved" | undefined,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);

  const { data: farmProblems, isLoading } = useGetProblemsCommunityList({
    search: params.search,
    page: String(params.currentPage),
    perpage: "10",
    filter: params.sortBy
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  }, 100);
  return (
    <div>
      <div className="flex justify-between gap-3 mb-4">
        <Input
          placeholder="Search problem..."
          className="max-w-sm"
          value={params.search}
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
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <DialogAddProblem />
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

export default CommunityProblemTable;
