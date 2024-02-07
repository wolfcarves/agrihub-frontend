import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableEvent } from "../table/table-event";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import { useNavigate } from "react-router-dom";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Events", link: "/admin/resource/events" }
];
const EventsAdmin = () => {
  const navigate = useNavigate();

  const handleAddEvents = () => {
    navigate("add");
  };

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Events</h2>
        <Button onClick={handleAddEvents}>+ Add</Button>
      </div>
      <p className="text-sm text-muted-foreground">Manage all events.</p>
      <hr className="my-4" />
      <TableEvent />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(EventsAdmin, ["admin", "asst_admin"]);
