import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import DialogAddTags from "@components/admin/forums/dialog/dialog-add-tags.tsx/dialog-add-tags";
import TableTagsList from "@components/admin/forums/table/table-tags-list/table-tags-list";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Tags", link: "/admin/forum/tags" }
];
const TagsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Tags</h2>
        <DialogAddTags />
      </div>
      <p className="text-sm text-muted-foreground">
        Manage all tags within the website.
      </p>
      <hr className="my-4" />
      <TableTagsList />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(TagsAdmin, ["admin", "asst_admin"], "forums");
