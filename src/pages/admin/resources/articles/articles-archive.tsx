import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { data, columns } from "../table/columns-article";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Articles", link: "/admin/resource/articles" },
  { title: "Archive", link: "/admin/resource/articles-archives" }
];
const ArticlesArchive = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Archived Articles</h2>
      <p className="text-sm text-muted-foreground">Manage archived articles.</p>
      <hr className="my-4" />
      <Input placeholder="Search title..." className="max-w-sm my-4" />
      <DataTable columns={columns} data={data} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(ArticlesArchive, ["admin", "asst_admin"]);
