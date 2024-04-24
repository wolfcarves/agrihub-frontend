import React, { useMemo } from "react";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { columns } from "../../table/columns-farm-application";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { Input } from "@components/ui/input";
import useGetFarmApplicationList from "@hooks/api/get/useGetFarmApplicationsList";
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../../../components/ui/custom";

const AdminFarmsPending = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: applications, isLoading } = useGetFarmApplicationList({
    search: params.search,
    page: String(params.currentPage),
    filter: "pending",
    perpage: "10"
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
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={applications?.applications || []} />
      {applications?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(applications?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  );
};

export default withAuthGuard(
  AdminFarmsPending,
  ["admin", "asst_admin"],
  "farms"
);
