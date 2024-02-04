import React from "react";
import BarDistrictOverview from "../charts/bar-district-overview";
import DoughnutResource from "../charts/dougnut-resource-overview";
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

const breadcrumbItems = [{ title: "", link: "" }];

const OverviewAdmin = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight pb-5">Overview</h2>
      <div className="grid grid-cols-10 grid-rows-4 gap-4">
        <Card className="col-span-4 row-span-4 flex-col justify-center items-center">
          <CardHeader>
            <CardTitle>Resources</CardTitle>
            <CardDescription>
              Comparison of total Articles, Blogs, Learning Resources and Events
            </CardDescription>
          </CardHeader>
          <DoughnutResource />
        </Card>
        <Card className="col-span-6 row-span-2 col-start-5 flex-col justify-center items-end p-5">
          <CardHeader>
            <CardTitle>District Farms</CardTitle>
            <CardDescription>
              Comparison of total number of farms each district
            </CardDescription>
          </CardHeader>
          <BarDistrictOverview />
        </Card>
        <Card className="col-span-6 row-span-2 col-start-5 row-start-3 flex-col justify-center items-center p-5">
          <CardHeader>
            <CardTitle>Forums</CardTitle>
            <CardDescription>
              Comparison of total question and answer each month
            </CardDescription>
          </CardHeader>
          <LineForumOverview />
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(OverviewAdmin, ["admin", "asst_admin"]);
