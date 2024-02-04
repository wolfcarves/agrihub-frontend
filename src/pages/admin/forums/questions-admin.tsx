import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableQuestions } from "./table/table-question";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Questions", link: "/admin/forum/questions" }
];
const QuestionsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Questions</h2>
      <p className="text-sm text-muted-foreground">
        Manage all question and answer in forums.
      </p>
      <hr className="my-4" />
      <TableQuestions />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(QuestionsAdmin, ["admin", "asst_admin"]);
