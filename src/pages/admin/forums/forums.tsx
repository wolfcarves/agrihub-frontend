import React from "react";
import LineForumOverview from "../charts/line-forum-overview";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@components/ui/card";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [{ title: "Forum Management", link: "/admin/forum" }];
const Forums = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight mb-5">Forum Overview</h2>
      <div className="grid grid-cols-6 grid-rows-5 gap-4">
        <Card className="col-span-2 flex justify-start items-center">
          <CardHeader>
            <CardTitle>10390</CardTitle>
            <CardDescription>Total Questions in Forums</CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-2 col-start-3 flex justify-start items-center">
          <CardHeader>
            <CardTitle>127242</CardTitle>
            <CardDescription>Total Answers in Forums</CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-2 col-start-5 flex justify-start items-center">
          <CardHeader>
            <CardTitle>1840</CardTitle>
            <CardDescription>
              Total Tags Defined in Questions and Answers
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-6 row-span-4 row-start-2 p-5">
          <CardHeader>
            Comparison of total question and answer each month
          </CardHeader>
          <LineForumOverview />
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(Forums, ["admin", "asst_admin"]);
