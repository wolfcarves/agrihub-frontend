import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import TableUserActive from "../../../components/admin/user/table/table-user-active/table-user-active";

const breadcrumbItems = [
  { title: "User Management", link: "/admin/record/users" },
  { title: "Users", link: "/admin/record/users" }
];
const RecordUsers = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      <p className="text-sm text-muted-foreground">Manage all users.</p>
      <hr className="my-4" />
      <TableUserActive />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(RecordUsers, ["admin", "asst_admin"]);
