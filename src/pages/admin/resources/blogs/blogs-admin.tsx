import React from "react";
import { useNavigate } from "react-router-dom";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import { data, columns } from "../table/columns-blog";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { Input } from "@components/ui/input";
import DialogAddBlogs from "../../../../components/admin/blogs/dialogs/dialog-add-blogs/dialog-add-blogs";

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
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(BlogsAdmin, ["admin", "asst_admin"]);
