import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Button } from "@components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@components/ui/input";
import { data, columns } from "../table/columns-article";
import { DataTable } from "@components/ui/custom/data-table/data-table";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Articles", link: "/admin/resource/articles" }
];

const ArticlesAdmin = () => {
  const navigate = useNavigate();

  const handleAddArticles = () => {
    navigate("add");
  };

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
        <Button onClick={handleAddArticles}>+ Add</Button>
      </div>
      <p className="text-sm text-muted-foreground">Manage all articles.</p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(ArticlesAdmin, ["admin", "asst_admin"]);
