import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { useParams } from "react-router-dom";
import AdminFarmReportedProblems from "@components/admin/farms/table/reported-problems-table";
import TableCommunityFarmActive from "../../../components/admin/community-farms/table-community-farm-active/table-community-farm-active";
import TableCommunityFarmArchive from "../../../components/admin/community-farms/table-community-farm-archive/table-community-farm-archive";

const breadcrumbItems = [
  {
    title: "Farm Problems",
    link: "/admin/farm/problems"
  }
];

const FarmCommunity = () => {
  const { tab }: any = useParams();
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Community Farm</h2>
          <p className="text-sm text-muted-foreground">
            Manage all registered community in the system
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <Tabs defaultValue={tab || "active"}>
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="problems">Problems</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <TableCommunityFarmActive />
        </TabsContent>

        <TabsContent value="problems">
          <AdminFarmReportedProblems />
        </TabsContent>

        <TabsContent value="archived">
          <TableCommunityFarmArchive />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmCommunity, ["admin", "asst_admin"], "farms");
