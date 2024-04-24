import React, { useMemo } from "react";
import { columns } from "../../../../pages/admin/farms/table/columns-farm-problems";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FarmProblemsService } from "../../../../api/openapi";
import useDebounce from "../../../../hooks/utils/useDebounce";
import { Pagination } from "../../../ui/custom";

type ProblemParams = {
  search: string;
  page: number;
  perpage: string;
  filter?: string;
};

const FarmProblemsUnusual = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo<ProblemParams>(
    () => ({
      search: searchParams.get("search") ?? "",
      page: Number(searchParams.get("page")) ?? 1,
      perpage: "10"
    }),
    [searchParams]
  );

  const { search, page, perpage } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["GET_PROBLEM_LIST_UNUSUAL", search, page, perpage],
    queryFn: async () => {
      const data = await FarmProblemsService.getApiFarmProblemsList({
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
  }, 400);

  return (
    <>
      <Input
        placeholder="Search..."
        className="max-w-sm my-4"
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

export default FarmProblemsUnusual;
