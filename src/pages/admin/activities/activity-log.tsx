import React, { useMemo } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns } from "./table/columns-activity";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useGetAuditLogsListQuery from "../../../hooks/api/get/useGetAuditLogsListQuery";
import useDebounce from "../../../hooks/utils/useDebounce";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../components/ui/custom";

const breadcrumbItems = [
  { title: "Activity Logs", link: "/admin/record/activity-logs" }
];
const ActivityLog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      currentPage: Number(searchParams.get("page")) ?? 1,
      search: searchParams.get("search") ?? undefined
    };
  }, [searchParams]);
  const { data: logsData, isLoading } = useGetAuditLogsListQuery(
    params.search,
    String(params.currentPage),
    "10"
  );
  console.log(logsData);

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  }, 100);
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Admin Activities</h2>
      <p className="text-sm text-muted-foreground">
        Manage admin activity logs.
      </p>
      <hr className="my-4" />
      <Input
        placeholder="Search ..."
        className="max-w-sm my-4"
        value={params.search}
        onChange={e => debouncedSearch(e.target.value)}
      />
      <DataTable columns={columns} data={logsData?.data || []} />
      {logsData?.pagination?.total_pages !== 1 && (
        <div className="mt-4">
          <Pagination
            totalPages={Number(logsData?.pagination?.total_pages)}
            isLoading={isLoading}
          />
        </div>
      )}
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  ActivityLog,
  ["admin", "asst_admin"],
  "activity_logs"
);
