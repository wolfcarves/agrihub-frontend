import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminFarmReportedProblems from "@components/admin/farms/table/reported-problems-table";

const breadcrumbItems = [
  {
    title: "Farm Problems",
    link: "/admin/farm/problems/reported"
  }
];

const FarmReportedProblems = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Problems</h2>
          <p className="text-sm text-muted-foreground">
            Manage all reported problems within the community
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <AdminFarmReportedProblems />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  FarmReportedProblems,
  ["admin", "asst_admin"],
  "farms"
);
