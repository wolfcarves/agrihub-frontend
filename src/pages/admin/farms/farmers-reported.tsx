import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { data, columns } from "./table/columns-reported-farmer";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { Input } from "@components/ui/input";

const breadcrumbItems = [
  { title: "Farm Management", link: "/admin/farm" },
  { title: "Farmers", link: "/admin/farm/farmers" },
  { title: "Reported Accounts", link: "/admin/farm/accounts-reported" }
];
const FarmersReported = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Reported Farmers</h2>
      <p className="text-sm text-muted-foreground">
        Manage reported farmers within the community.
      </p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmersReported, ["admin", "asst_admin"]);
