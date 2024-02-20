import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import TableLearningMaterialArchive from "../../../../components/admin/learning-materials/tables/table-learning-material-archive/table-learning-material-archive";

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
      <TableLearningMaterialArchive />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(LearningsArchive, ["admin", "asst_admin"]);
