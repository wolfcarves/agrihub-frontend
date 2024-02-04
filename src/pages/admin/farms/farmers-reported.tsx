import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableReportedFarmers } from "./table/table-reported-farmer";
import withAuthGuard from "@higher-order/account/withAuthGuard";

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
      <TableReportedFarmers />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmersReported, ["admin", "asst_admin"]);
