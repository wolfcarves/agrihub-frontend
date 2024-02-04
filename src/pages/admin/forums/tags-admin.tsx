import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableTag } from "./table/table-tag";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Tags", link: "/admin/forum/tags" }
];
const TagsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Tags</h2>
      <p className="text-sm text-muted-foreground">
        Manage all tags within the website.
      </p>
      <hr className="my-4" />
      <TableTag />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(TagsAdmin, ["admin", "asst_admin"]);
