import React, { useMemo } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetEventPublishedListQuery from "../../../../../hooks/api/get/useGetEventPublishedListQuery";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { Pagination } from "../../../../ui/custom";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
const TableEventsPublished = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      sortBy: searchParams.get("sortBy") as "upcoming" | "previous" | undefined,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: eventsData, isLoading } = useGetEventPublishedListQuery({
    search: params.search,
    page: String(params.currentPage),
    perpage: "10",
    filter: params.sortBy
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search..."
          className="max-w-sm my-4"
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
            <SelectItem value="previous">Previous</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable columns={columns} data={eventsData?.data || []} />
      {eventsData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(eventsData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default TableEventsPublished;
