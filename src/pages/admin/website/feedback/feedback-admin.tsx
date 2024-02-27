import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { data, columns } from "./columns-feedback";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";

const breadcrumbItems = [
  {
    title: "Feedbacks and Suggestion",
    link: "/admin/website/user-feedback"
  }
];
const FeedbackAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          User Feedback and Suggestion
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Manage all user feeback and suggestion, and set testimonials in your
        website.
      </p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  FeedbackAdmin,
  ["admin", "asst_admin"],
  "user_feedback"
);
