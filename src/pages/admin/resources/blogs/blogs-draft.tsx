import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import TableBlogsDraft from "../../../../components/admin/blogs/table/table-blogs-draft/table-blogs-draft";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Blogs", link: "/admin/resource/blogs" },
  { title: "Draft", link: "/admin/resource/blogs-drafts" }
];
const BlogsDraft = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Blogs Draft</h2>
      <p className="text-sm text-muted-foreground">Manage blogs draft.</p>
      <hr className="my-4" />
      <TableBlogsDraft />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(BlogsDraft, ["admin", "asst_admin"]);
