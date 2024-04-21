import React, { useMemo } from "react";
import { columns } from "@pages/admin/farms/table/columns-farm-problems";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { useQuery } from "@tanstack/react-query";
import { FarmProblemsService } from "@api/openapi";
import { Pagination } from "../../../ui/custom";
import { useSearchParams } from "react-router-dom";
import useDebounce from "@hooks/utils/useDebounce";

type ProblemParams = {
  search: string;
  page: number;
  perpage: string;
};

const FarmProblemsArchived = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo<ProblemParams>(
    () => ({
      search: searchParams.get("search") ?? "",
      page: Number(searchParams.get("page")) ?? 1,
      perpage: "20"
    }),
    [searchParams]
  );

  const { search, page, perpage } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["GET_PROBLEM_LIST_COMMON", search, page, perpage],
    queryFn: async () => {
      const data = await FarmProblemsService.getApiFarmProblemsArchivedList({
        ...params,
        page: String(page)
      });
      searchParams.set("search", search);
      searchParams.delete("page");
      setSearchParams(searchParams);
      return data;
    },
    keepPreviousData: true
  });

  const handleSearch = useDebounce((search: string) => {
    searchParams.set("search", search);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 700);

  if (isLoading) {
    return "loading..";
  }
  return (
    <>
      <Input
        placeholder="Search title..."
        className="max-w-sm my-4"
        // value={searchParams.get("search") as string}
        onChange={e => handleSearch(e.target.value)}
      />
      <DataTable columns={columns} data={data?.data || []} />
      <div className="mt-2">
        {data?.pagination?.total_pages !== 1 && (
          <Pagination
            totalPages={data?.pagination?.total_pages as number}
            isLoading={isLoading}
          />
        )}
      </div>
    </>
  );
};

export default FarmProblemsArchived;
