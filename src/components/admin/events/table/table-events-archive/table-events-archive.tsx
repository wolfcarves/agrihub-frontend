import React, { useMemo } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetEventArchiveList from "../../../../../hooks/api/get/useGetEventArchiveList";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../../ui/custom";

const TableEventsArchive = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: eventsData, isLoading } = useGetEventArchiveList(
    params.search,
    String(params.currentPage),
    "10"
  );
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

export default TableEventsArchive;
