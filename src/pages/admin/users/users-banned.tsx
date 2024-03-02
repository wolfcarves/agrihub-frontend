import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import TableUserBanned from "../../../components/admin/user/table/table-user-banned/table-user-banned";

const breadcrumbItems = [
  { title: "User Management", link: "/admin/record/users" },
  { title: "Users", link: "/admin/record/users" },
  { title: "Banned", link: "/admin/record/user-banned" }
];
const UsersBanned = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Banned User</h2>
      <p className="text-sm text-muted-foreground">Manage all banned users.</p>
      <hr className="my-4" />
      <TableUserBanned />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(UsersBanned, ["admin", "asst_admin"]);
