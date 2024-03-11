import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import AdminFarmsRegistered from "./tabs/farms/farms-registered";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import AdminFarmsPending from "./tabs/farms/farms-pending";
import AdminFarmsRejected from "./tabs/farms/farms-rejected";
import { useParams } from "react-router-dom";

const breadcrumbItems = [
  { title: "Farm Management", link: "/admin/community" },
  { title: "Farms", link: "/admin/community/farms" }
];
const FarmsAdmin = () => {
  const { tab }: any = useParams();
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Farm Application</h2>
      <p className="text-sm text-muted-foreground">
        Manage all farms within the community.
      </p>
      <hr className="my-4" />
      <Tabs defaultValue={tab || "registered"}>
        <TabsList>
          <TabsTrigger value="registered">Farms</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="registered">
          <AdminFarmsRegistered />
        </TabsContent>
        <TabsContent value="pending">
          <AdminFarmsPending />
        </TabsContent>
        <TabsContent value="rejected">
          <AdminFarmsRejected />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(FarmsAdmin, ["admin", "asst_admin"], "farms");
