import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns, data } from "../table/columns-event";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import { useNavigate } from "react-router-dom";
import DialogAddEvent from "../../../../components/admin/events/dialogs/dialog-add-event/dialog-add-event";
import TableEventsPublished from "../../../../components/admin/events/table/table-events-published/table-events-published";

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
        <DialogAddEvent />
      </div>
      <p className="text-sm text-muted-foreground">Manage all events.</p>
      <hr className="my-4" />
      <TableEventsPublished />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(EventsAdmin, ["admin", "asst_admin"], "event");
