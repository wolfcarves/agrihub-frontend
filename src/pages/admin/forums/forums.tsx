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
import useGetReportForumsCount from "../../../hooks/api/get/useGetReportForumsCount";

const breadcrumbItems = [{ title: "Forum Management", link: "/admin/forum" }];

const Forums = () => {
  const { data: forumsCount } = useGetReportForumsCount();
  console.log(forumsCount);
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight mb-5">Forum Overview</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex justify-start items-center">
          <CardHeader>
            <CardTitle>{forumsCount?.forums}</CardTitle>
            <CardDescription>Total Questions in Forums</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex justify-start items-center">
          <CardHeader>
            <CardTitle>{forumsCount?.forums_answers}</CardTitle>
            <CardDescription>Total Answers in Forums</CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex justify-start items-center">
          <CardHeader>
            <CardTitle>{forumsCount?.forums_tags}</CardTitle>
            <CardDescription>
              Total Tags Defined in Questions and Answers
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-full md:col-span-2 lg:col-span-3 p-5 pb-20">
          <CardHeader>
            Comparison of total question and answer each month
          </CardHeader>
          <div className="h-96">
            <LineForumOverview />
          </div>
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(Forums, ["admin", "asst_admin"], "forums");
