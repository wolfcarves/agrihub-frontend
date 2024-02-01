import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableBlogs } from "./table/table-blog";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Blogs", link: "/admin/resource/blogs" }
];
const BlogsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Blogs</h2>
      <p className="text-sm text-muted-foreground">Manage all blogs.</p>
      <hr className="my-4" />
      <TableBlogs />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(BlogsAdmin, ["admin", "asst_admin"]);
