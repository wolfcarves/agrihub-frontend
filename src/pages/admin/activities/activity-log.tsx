import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableActivityLog } from "./table/table-activity";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Activity Logs", link: "/admin/record/activity-logs" }
];
const ActivityLog = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Admin Activities</h2>
      <p className="text-sm text-muted-foreground">
        Manage admin activity logs.
      </p>
      <hr className="my-4" />
      <TableActivityLog />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(ActivityLog, ["admin", "asst_admin"]);
