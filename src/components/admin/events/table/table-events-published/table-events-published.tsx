import React, { useMemo, useState } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import useGetEventsDraftList from "../../../../../hooks/api/get/useGetEventsDraftList";
import { columns } from "./columns";
import useGetEventPublishedListQuery from "../../../../../hooks/api/get/useGetEventPublishedListQuery";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { Pagination } from "../../../../ui/custom";
import { useSearchParams } from "react-router-dom";

const TableEventsPublished = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: eventsData, isLoading } = useGetEventPublishedListQuery({
    search: params.search,
    page: String(params.currentPage),
    perpage: "20"
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  }, 100);

  return (
    <div>
      <Input
        placeholder="Search title..."
        className="max-w-sm my-4"
        value={params.search}
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

export default TableEventsPublished;
