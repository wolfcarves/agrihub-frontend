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
import DialogAddProblem from "../dialog-assign-task/dialog-assign-task";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { Input } from "../../../../ui/input";
import { Pagination } from "../../../../ui/custom";
import { Button } from "../../../../ui/button";
import { CSVLink } from "react-csv";
import { PiFileCsvFill } from "react-icons/pi";
import useGetCommunityFarmTaskList from "../../../../../hooks/api/get/useGetCommunityFarmTaskList";
import DialogAssignTask from "../dialog-assign-task/dialog-assign-task";
import useGetCommunityFarmTaskListFarmer from "../../../../../hooks/api/get/useGetCommunityFarmTaskListFarmer";
import useAuth from "../../../../../hooks/useAuth";
const CommunityTaskTable = () => {
  const { id } = useParams();
  const { data: useData } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as "completed" | "pending",
      search: searchParams.get("search") ?? undefined,
      type: searchParams.get("type") as "plant" | "harvest"
    };
  }, [searchParams]);

  const { data: farmProblems, isLoading } = useGetCommunityFarmTaskList({
    id: id || "",
    search: params.search,
    page: String(params.currentPage),
    perpage: "10",
    filter: params.sortBy,
    type: params.type
  });

  const { data: farmAssignFarmer, isLoading: farmerLoad } =
    useGetCommunityFarmTaskListFarmer({
      id: id || "",
      search: params.search,
      page: String(params.currentPage),
      perpage: "10",
      filter: params.sortBy,
      type: params.type
    });

  const { data: ProblemExport } = useGetCommunityFarmTaskList({
    id: id || "",
    search: params.search,
    page: "1",
    perpage: "100000",
    filter: params.sortBy,
    type: params.type
  });

  const headers = [
    { label: "Farm Problem", key: "problem" },
    { label: "Status", key: "status" },
    { label: "Date Notice", key: "date_noticed" }
  ];

  // const problemData = useMemo(() => {
  //   return (
  //     ProblemExport?.data?.map(item => ({
  //       problem: item.problem,
  //       status: item.status,
  //       date_noticed: item.date_noticed
  //     })) || []
  //   );
  // }, [ProblemExport]);

  const currentDate = new Date();
  const currentDateTime = currentDate.toISOString();

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  }, 100);
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between gap-3 mb-4">
        <Input
          placeholder="Search task..."
          className="max-w-sm"
          onChange={e => debouncedSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-3">
          {/* <Button>
            <CSVLink
              className="flex items-center gap-1"
              data={problemData}
              headers={headers}
              filename={`farm-problem-${currentDateTime}.csv`}
            >
              <PiFileCsvFill size={18} /> Export
            </CSVLink>
          </Button> */}
          <Select
            onValueChange={val => {
              searchParams.set("sortBy", val);
              setSearchParams(searchParams);
            }}
          >
            <SelectTrigger className="w-[120px] focus-visible:ring-0 focus:ring-0">
              <SelectValue placeholder="Filter..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={val => {
              searchParams.set("type", val);
              setSearchParams(searchParams);
            }}
          >
            <SelectTrigger className="w-[120px] focus-visible:ring-0 focus:ring-0">
              <SelectValue placeholder="Type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="plant">Plant</SelectItem>
                <SelectItem value="harvest">Harvest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {useData?.role === "farm_head" && <DialogAssignTask />}
        </div>
      </div>
      <div className="min-h-[63vh] mb-2">
        {useData?.role === "farmer" ? (
          <DataTable columns={columns} data={farmAssignFarmer?.data || []} />
        ) : (
          <DataTable columns={columns} data={farmProblems?.data || []} />
        )}
      </div>
      {farmProblems?.pagination?.total_pages !== 1 && (
        <Pagination
          totalPages={Number(farmProblems?.pagination?.total_pages)}
          isLoading={isLoading || farmerLoad}
        />
      )}
    </div>
  );
};

export default CommunityTaskTable;
