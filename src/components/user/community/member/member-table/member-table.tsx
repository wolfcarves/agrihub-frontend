import React, { useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { columns } from "./columns";
import { DataTable } from "../../../../ui/custom/data-table/data-table";
import Header from "./header";
import useGetFarmMembersQuery from "../../../../../hooks/api/get/useGetFarmMembersQuery";
import { Pagination } from "../../../../ui/custom";
const MemberTable = () => {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,

      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);

  const { data: MemberData, isLoading } = useGetFarmMembersQuery({
    id: id || "",
    search: params.search,
    page: String(params.currentPage),
    perpage: "10",
    filter: undefined
  });

  return (
    <div>
      <Header setSearchParams={setSearchParams} searchParams={searchParams} />
      <DataTable columns={columns} data={MemberData?.members || []} />
      {MemberData?.pagination?.total_pages !== 1 && (
        <Pagination
          totalPages={Number(MemberData?.pagination?.total_pages)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default MemberTable;
