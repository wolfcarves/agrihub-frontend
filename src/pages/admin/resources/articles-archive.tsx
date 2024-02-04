import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import { TableArticles } from "./table/table-article";
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
      <TableArticles />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(ArticlesArchive, ["admin", "asst_admin"]);
