import React, { useMemo } from "react";
import { Input } from "@components/ui/input";
import { columns } from "./columns";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import useGetRequestToolListAllQuery from "../../../../hooks/api/get/useGetRequestToolListAllQuery";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../../../../hooks/utils/useDebounce";
import { Pagination } from "../../../ui/custom";

const TableToolPending = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: ToolData, isLoading } = useGetRequestToolListAllQuery({
    perpage: "10",
    page: String(params.currentPage),
    search: params.search,
    filter: "pending",
    farmid: undefined
  });

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search..."
          className="max-w-sm"
          onChange={e => debouncedSearch(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={ToolData?.data || []} />
      {ToolData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(ToolData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default TableToolPending;
