import React, { useMemo } from "react";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "./columns-tag";
import useGetTagsQuery from "@hooks/api/get/useGetTagsQuery";
import { useSearchParams } from "react-router-dom";
import useDebounce from "@hooks/utils/useDebounce";
import { Pagination } from "@components/ui/custom";

const TableTagsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // search and paginate
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: tagsData, isLoading } = useGetTagsQuery({
    search: params.search,
    page: String(params.currentPage),
    perpage: "10",
    filter: "name"
  });
  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);

  return (
    <>
      <Input
        placeholder="Search..."
        className="max-w-sm my-4"
        value={params.search}
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={tagsData?.tags || []} />
      {tagsData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(tagsData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  );
};

export default TableTagsList;
