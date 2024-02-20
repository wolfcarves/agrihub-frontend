import React, { useState } from "react";
import { DataTable } from "../../../components/ui/custom/data-table/data-table";
import { columns } from "./columns";
import useGetFarmApplicationList from "../../../hooks/api/get/useGetFarmApplicationsList";
import AdminOutletContainer from "../../../components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Farm Applications", link: "/admin/farm/application" }
];

const FarmApplication = () => {
  const [page, setPage] = useState(1);
  const { data: applications } = useGetFarmApplicationList({
    search: "",
    page: "",
    filter: "pending",
    perpage: "10"
  });
  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Farm Applications</h2>
      <p className="text-sm text-muted-foreground">Manage farm applications.</p>
      <hr className="my-4" />
      <DataTable columns={columns} data={applications?.applications || []} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmApplication, ["admin", "asst_admin"]);
