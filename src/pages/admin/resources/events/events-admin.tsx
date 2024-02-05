import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableEvent } from "../table/table-event";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Events", link: "/admin/resource/events" }
];
const EventsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Events</h2>
      <p className="text-sm text-muted-foreground">Manage all events.</p>
      <hr className="my-4" />
      <TableEvent />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(EventsAdmin, ["admin", "asst_admin"]);
