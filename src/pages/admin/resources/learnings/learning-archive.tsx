import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableLearningMaterial } from "../table/table-learning";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Learning Materials", link: "/admin/resource/learnings" },
  {
    title: "Archived",
    link: "/admin/resource/learnings-archives"
  }
];
const LearningsArchive = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">
        Archived Learning Materials
      </h2>
      <p className="text-sm text-muted-foreground">
        Manage archived learning materials.
      </p>
      <hr className="my-4" />
      <TableLearningMaterial />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(LearningsArchive, ["admin", "asst_admin"]);
