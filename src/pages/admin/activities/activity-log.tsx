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

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  }, 400);
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Admin Activities</h2>
      <p className="text-sm text-muted-foreground w-11/12">
        Track and monitor admin activities to maintain transparency and
        accountability within the platform. Access detailed logs of admin
        actions, including user bans, warnings, and more. Use activity logs to
        review and audit administrative activities, ensuring compliance with
        policies and regulations while upholding platform integrity
      </p>
      <hr className="my-4" />
      <Input
        placeholder="Search..."
        className="max-w-sm my-4"
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
