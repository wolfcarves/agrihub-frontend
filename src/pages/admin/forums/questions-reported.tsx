import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableReportedQuestions } from "./table/table-reported-question";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Questions", link: "/admin/forum/questions" },
  { title: "Reported", link: "/admin/forum/question-archive" }
];
const QuestionsReported = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">
        Reported Question & Answer
      </h2>
      <p className="text-sm text-muted-foreground">
        Manage reported question and answer in forums.
      </p>
      <hr className="my-4" />
      <TableReportedQuestions />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(QuestionsReported, ["admin", "asst_admin"]);
