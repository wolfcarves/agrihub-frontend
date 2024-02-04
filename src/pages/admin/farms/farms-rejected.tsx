import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableFarmApplication } from "./table/table-farm-application";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Farm Management", link: "/admin/farm" },
  { title: "Farms", link: "/admin/farm/farms" },
  { title: "Rejected Application", link: "/admin/farm/farm-rejected" }
];
const FarmsRejected = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">
        Rejected Farm Applictions
      </h2>
      <p className="text-sm text-muted-foreground">
        Manage rejected farm applications within the community.
      </p>
      <hr className="my-4" />
      <TableFarmApplication />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmsRejected, ["admin", "asst_admin"]);
