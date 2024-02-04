import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableQuestions } from "./table/table-question";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Questions", link: "/admin/forum/questions" },
  { title: "Archive", link: "/admin/forum/question-archive" }
];
const QuestionsArchive = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">
        Archived Question and Answer
      </h2>
      <p className="text-sm text-muted-foreground">
        Manage archived question and answer in forums.
      </p>
      <hr className="my-4" />
      <TableQuestions />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(QuestionsArchive, ["admin", "asst_admin"]);
