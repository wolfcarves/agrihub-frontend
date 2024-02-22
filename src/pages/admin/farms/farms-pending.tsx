import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { columns } from "./table/columns-farm-application";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { Input } from "@components/ui/input";
import useGetFarmApplicationList from "@hooks/api/get/useGetFarmApplicationsList";

const breadcrumbItems = [
  { title: "Farm Management", link: "/admin/farm" },
  { title: "Farm Applications", link: "/admin/farm/farm-request" }
];

const FarmsPending = () => {
  const { data: applications } = useGetFarmApplicationList({
    search: "",
    page: "",
    filter: "pending",
    perpage: "10"
  });

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Farm Applications</h2>
      <p className="text-sm text-muted-foreground">
        Manage all farms within the community.
      </p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={applications?.applications || []} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmsPending, ["admin", "asst_admin"]);
