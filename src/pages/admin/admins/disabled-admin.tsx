import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableAdmin } from "./table/table-admin";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Admin Management", link: "/admin/record/admins" },
  { title: "Disabled Accounts", link: "/admin/record/admins" }
];
const DisabledAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">
        Disabled Admin Accounts
      </h2>
      <p className="text-sm text-muted-foreground">Manage all admins.</p>
      <hr className="my-4" />
      <TableAdmin />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(DisabledAdmin, ["admin", "asst_admin"]);
