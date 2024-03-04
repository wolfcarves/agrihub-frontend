import React, { useState } from "react";
import useGetReportCropListQuery from "../../../../../hooks/api/get/useGetReportCropListQuery";
import { useParams } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import StatePagination from "../../state-pagination/state-pagination";

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
const CommunityProblemTable = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<
    "pending" | "resolved" | undefined
  >(undefined);
  const [page, setPage] = useState<number>(1);

  const { data: farmProblems, isLoading } = useGetProblemsCommunityList({
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter
  });
  console.log(farmProblems);

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="flex justify-end gap-3 mb-4">
        <Select
          onValueChange={val => {
            val === "all"
              ? setFilter(undefined)
              : setFilter(val as "pending" | "resolved" | undefined);
          }}
        >
          <SelectTrigger className="w-[120px] focus-visible:ring-0 focus:ring-0">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DialogAddProblem />
      </div>
      <div className="min-h-[63vh] mb-2">
        <DataTable columns={columns} data={farmProblems?.data || []} />
      </div>
      {!isLoading && (
        <StatePagination
          currentPage={Number(farmProblems?.pagination?.page)}
          totalPages={Number(farmProblems?.pagination?.total_pages)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default CommunityProblemTable;
