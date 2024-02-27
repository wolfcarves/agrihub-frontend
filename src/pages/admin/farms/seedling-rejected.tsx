import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { data, columns } from "./table/columns-seedling";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { Input } from "@components/ui/input";
import TableSeedlingRejected from "../../../components/admin/seedling-request/table-seedling-rejected/table-seedling-rejected";

const breadcrumbItems = [
  { title: "Farm Management", link: "/admin/farm" },
  { title: "Farms", link: "/admin/farm/farms" },
  { title: "Pending Seedling Request", link: "/admin/farm/seedling-pending" }
];
const SeedlingRejected = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">
        Rejected Seedling Request
      </h2>
      <p className="text-sm text-muted-foreground">
        Manage pendong seedling request of farms.
      </p>
      <hr className="my-4" />
      <TableSeedlingRejected />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  SeedlingRejected,
  ["admin", "asst_admin"],
  "farms"
);
