import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { columns, data } from "../table/columns-event";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useGetEventsDraftList from "../../../../hooks/api/get/useGetEventsDraftList";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Events", link: "/admin/resource/events" },
  { title: "Drafs", link: "/admin/resource/events-draft" }
];
const EventsDraft = () => {
  const { data: LearningData } = useGetEventsDraftList(
    undefined,
    undefined,
    undefined
  );
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Drafted Events</h2>
      <p className="text-sm text-muted-foreground">Manage drafted events.</p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(EventsDraft, ["admin", "asst_admin"]);
