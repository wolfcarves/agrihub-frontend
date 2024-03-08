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
import useGetReportResourceCountDetailed from "../../../hooks/api/get/useGetReportResourceCountDetailed";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" }
];

const Resource = () => {
  const { data: resourceCount } = useGetReportResourceCountDetailed();
  const navigate = useNavigate();

  const handleBlogsClick = () => {
    navigate("/admin/resource/blogs");
  };

  const handleEventsClick = () => {
    navigate("/admin/resource/events");
  };

  const handleLearningsClick = () => {
    navigate("/admin/resource/learnings");
  };

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight mb-5">
        Resource Overview
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4 md:gap-4">
        <Card className="col-span-full md:col-span-3 md:row-span-4 p-8">
          <DoughnutResource />
        </Card>
        <Card
          className="col-span-full md:col-span-3 md:col-start-4"
          onClick={handleBlogsClick}
          style={{ cursor: "pointer" }}
        >
          <CardHeader>
            <CardTitle>{resourceCount?.blogs}</CardTitle>
            <CardDescription>
              Total Blogs Posted, {resourceCount?.draft_blogs} is still in draft
              and {resourceCount?.archived_blogs} is archived.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card
          className="col-span-full md:col-span-3 md:col-start-4 md:row-start-2"
          onClick={handleEventsClick}
          style={{ cursor: "pointer" }}
        >
          <CardHeader>
            <CardTitle>{resourceCount?.events}</CardTitle>
            <CardDescription>
              Total Events Created, {resourceCount?.upcoming_events} upcoming
              events event.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card
          className="col-span-full md:col-span-3 md:col-start-4 md:row-start-3"
          onClick={handleLearningsClick}
          style={{ cursor: "pointer" }}
        >
          <CardHeader>
            <CardTitle>{resourceCount?.all_learning_materials}</CardTitle>
            <CardDescription>
              Total Learning Materials Created,{" "}
              {resourceCount?.draft_learning_material} is still in draft and{" "}
              {resourceCount?.archived_learning_material} is archived.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  Resource,
  ["admin", "asst_admin"],
  "blog" || "event" || "learning"
);
