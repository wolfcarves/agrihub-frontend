import React from "react";
import { useNavigate } from "react-router-dom";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { TableBlogs } from "../table/table-blog";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Blogs", link: "/admin/resource/blogs" }
];

const BlogsAdmin = () => {
  const navigate = useNavigate();

  const handleAddBlogs = () => {
    navigate("add");
  };

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Blogs</h2>
        <Button onClick={handleAddBlogs}>+ Add</Button>
      </div>
      <p className="text-sm text-muted-foreground">Manage all blogs.</p>
      <hr className="my-4" />
      <TableBlogs />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(BlogsAdmin, ["admin", "asst_admin"]);
