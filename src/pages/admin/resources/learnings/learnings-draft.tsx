import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import TableLearningMaterialDraft from "../../../../components/admin/learning-materials/tables/table-learning-material-draft/table-learning-material-draft";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Learning Materials", link: "/admin/resource/learnings" },
  {
    title: "Drafts",
    link: "/admin/resource/learnings-draft"
  }
];
const LearningsDraft = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">
        Drafted Learning Materials
      </h2>
      <p className="text-sm text-muted-foreground">
        Manage drafted learning materials.
      </p>
      <hr className="my-4" />
      <TableLearningMaterialDraft />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  LearningsDraft,
  ["admin", "asst_admin"],
  "learning"
);
