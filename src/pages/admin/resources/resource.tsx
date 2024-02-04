import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@components/ui/card";
import DoughnutResource from "../charts/dougnut-resource-overview";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Reasource Management", link: "/admin/resources" }
];

const Resource = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight mb-5">
        Resource Overview
      </h2>

      <div className="grid grid-cols-9 grid-rows-4 gap-4 ">
        <Card className="col-span-4 row-span-4 p-8">
          <DoughnutResource />
        </Card>
        <Card className="col-span-5 col-start-5">
          <CardHeader>
            <CardTitle>189</CardTitle>
            <CardDescription>
              Total Articles Created, 29 in still in draft and 30 is archived.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-5 col-start-5">
          <CardHeader>
            <CardTitle>132</CardTitle>
            <CardDescription>
              Total Blogs Posted, 28 is still in draft and 42 is archived.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-5 col-start-5">
          <CardHeader>
            <CardTitle>190</CardTitle>
            <CardDescription>
              Total Learning Materials Created, 40 is still in draft and 43 is
              archived.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-5 col-start-5">
          <CardHeader>
            <CardTitle>89</CardTitle>
            <CardDescription>
              Total Events Created, 84 is already over and there is 5 upcoming
              event.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(Resource, ["admin", "asst_admin"]);
