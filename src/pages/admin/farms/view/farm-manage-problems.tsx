import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import FarmProblemsForm from "@components/admin/farms/form/farm-problems-form";

const breadcrumbItems = [
  {
    title: "Farm Problems",
    link: "/admin/farm/problems"
  },
  {
    title: "Problem",
    link: "/admin/farm/problems/add"
  }
];

const ManageFarmProblemsAdmin = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            New Common Problem
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage all registered and unregistered crops within the community
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <FarmProblemsForm />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  ManageFarmProblemsAdmin,
  ["admin", "asst_admin"],
  "farms"
);
