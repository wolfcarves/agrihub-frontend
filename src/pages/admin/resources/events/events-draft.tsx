import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns, data } from "../table/columns-event";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useGetEventsDraftList from "../../../../hooks/api/get/useGetEventsDraftList";
import TableEventsDraft from "../../../../components/admin/events/table/table-events-draft/table-events-draft";

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
      <TableEventsDraft />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(EventsDraft, ["admin", "asst_admin"]);
