import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableReportedUser } from "./table/table-reported-user";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "User Management", link: "/admin/record/users" },
  { title: "Users", link: "/admin/record/users" },
  { title: "Reported", link: "/admin/record/user-reported" }
];
const UsersReported = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Reported User</h2>
      <p className="text-sm text-muted-foreground">
        Manage all reported users.
      </p>
      <hr className="my-4" />
      <TableReportedUser />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(UsersReported, ["admin", "asst_admin"]);
