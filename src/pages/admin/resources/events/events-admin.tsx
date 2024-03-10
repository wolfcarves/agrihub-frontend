import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns, data } from "../table/columns-event";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import DialogAddEvent from "../../../../components/admin/events/dialogs/dialog-add-event/dialog-add-event";
import TableEventsPublished from "../../../../components/admin/events/table/table-events-published/table-events-published";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import TableEventsDraft from "@components/admin/events/table/table-events-draft/table-events-draft";
import TableEventsArchive from "@components/admin/events/table/table-events-archive/table-events-archive";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Events", link: "/admin/resource/events" }
];
const EventsAdmin = () => {
  const { tab }: any = useParams();
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Events</h2>
        <DialogAddEvent />
      </div>
      <p className="text-sm text-muted-foreground">Manage all events.</p>
      <hr className="my-4" />
      <Tabs defaultValue={tab || "published"}>
        <TabsList>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="published">
          <TableEventsPublished />
        </TabsContent>

        <TabsContent value="draft">
          <TableEventsDraft />
        </TabsContent>

        <TabsContent value="archived">
          <TableEventsArchive />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(EventsAdmin, ["admin", "asst_admin"], "event");
