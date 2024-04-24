import React, { useMemo } from "react";
import { Input } from "../../../../ui/input";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetBlogsPublishList from "../../../../../hooks/api/get/useGetBlogsPublishListQuery";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { Pagination } from "../../../../ui/custom";
import { useSearchParams } from "react-router-dom";

const TableBlogsPublished = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: blogsData, isLoading } = useGetBlogsPublishList(
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
      <DataTable columns={columns} data={blogsData?.data || []} />
      {blogsData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(blogsData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default TableBlogsPublished;
