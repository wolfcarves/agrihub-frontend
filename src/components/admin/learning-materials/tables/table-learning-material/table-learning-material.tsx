import React, { useMemo } from "react";
import { Input } from "@components/ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetLearningPublishedList from "../../../../../hooks/api/get/useGetLearningPublishedList";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../../ui/custom";

const TableLearningMaterial = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: LearningData, isLoading } = useGetLearningPublishedList({
    perpage: "10",
    page: String(params.currentPage),
    search: params.search
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
      <DataTable columns={columns} data={LearningData?.data || []} />
      {LearningData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(LearningData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default TableLearningMaterial;
