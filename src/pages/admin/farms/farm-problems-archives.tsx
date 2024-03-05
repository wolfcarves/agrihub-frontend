import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import FarmProblemsArchived from "@components/admin/farms/table/farm-problems-archived";

const breadcrumbItems = [
  {
    title: "Farm Problems Archive",
    link: "/admin/farm/problems/archived"
  }
];

const FarmProblemsArchive = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Archived Problems
          </h2>
          <p className="text-sm text-muted-foreground"></p>
        </div>
        <Link to="/admin/farm/problems/add">
          <Button>+ Problems</Button>
        </Link>
      </div>
      <hr className="my-4" />
      <FarmProblemsArchived />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  FarmProblemsArchive,
  ["admin", "asst_admin"],
  "farms"
);
