import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { data, columns } from "./table/columns-admin";

const breadcrumbItems = [
  { title: "Admin Management", link: "/admin/record/admins" },
  { title: "Admin", link: "/admin/record/admins" }
];
const RecordAdmins = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Admin Accounts</h2>
      <p className="text-sm text-muted-foreground">Manage all admins.</p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(RecordAdmins, ["admin", "asst_admin"]);
