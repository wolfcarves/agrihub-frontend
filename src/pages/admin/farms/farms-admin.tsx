import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableFarm } from "./table/table-farm";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Farm Management", link: "/admin/farm" },
  { title: "Farms", link: "/admin/farm/farm-approved" }
];
const FarmsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Farms</h2>
      <p className="text-sm text-muted-foreground">
        Manage all farms within the community.
      </p>
      <hr className="my-4" />
      <TableFarm />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmsAdmin, ["admin", "asst_admin"]);
