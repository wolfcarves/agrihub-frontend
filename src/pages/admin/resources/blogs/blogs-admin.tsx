import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import DialogAddBlogs from "../../../../components/admin/blogs/dialogs/dialog-add-blogs/dialog-add-blogs";
import TableBlogsPublished from "../../../../components/admin/blogs/table/table-blogs-published/table-blogs-published";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Blogs", link: "/admin/resource/blogs" }
];

const BlogsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Blogs</h2>
        <DialogAddBlogs />
      </div>
      <p className="text-sm text-muted-foreground">Manage all blogs.</p>
      <hr className="my-4" />
      <TableBlogsPublished />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(BlogsAdmin, ["admin", "asst_admin"], "blog");
