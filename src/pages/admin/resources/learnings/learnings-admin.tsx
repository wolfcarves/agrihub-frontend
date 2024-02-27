import React, { useState } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";

import withAuthGuard from "@higher-order/account/withAuthGuard";
import DialogAddLearning from "../../../../components/admin/learning-materials/dialogs/dialog-add-learning/dialog-add-learning";
import TableLearningMaterial from "../../../../components/admin/learning-materials/tables/table-learning-material/table-learning-material";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Learning Materials", link: "/admin/resource/learnings" }
];
const LearningsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Learning Materials
        </h2>
        <DialogAddLearning />
      </div>
      <p className="text-sm text-muted-foreground">
        Manage all learning materials.
      </p>
      <hr className="my-4" />
      <TableLearningMaterial />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  LearningsAdmin,
  ["admin", "asst_admin"],
  "learning"
);
