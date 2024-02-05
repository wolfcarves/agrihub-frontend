import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableEvent } from "../table/table-event";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Events", link: "/admin/resource/events" },
  { title: "Drafs", link: "/admin/resource/events-draft" }
];
const EventsDraft = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Drafted Events</h2>
      <p className="text-sm text-muted-foreground">Manage drafted events.</p>
      <hr className="my-4" />
      <TableEvent />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(EventsDraft, ["admin", "asst_admin"]);
