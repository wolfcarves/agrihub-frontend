import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import CropsRegistered from "./crops-registered";
import CropsOthers from "./crops-others";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";

const breadcrumbItems = [
  {
    title: "Crops",
    link: "/admin/website/crops"
  }
];

const CropsAdmin = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Crops</h2>
          <p className="text-sm text-muted-foreground">
            Manage all registered and unregistered crops within the community
          </p>
        </div>
        <Link to="/admin/website/crops/add">
          <Button>Register Crop</Button>
        </Link>
      </div>
      <hr className="my-4" />
      <Tabs defaultValue="registered">
        <TabsList>
          <TabsTrigger value="registered">Registered</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="registered">
          <CropsRegistered />
        </TabsContent>

        <TabsContent value="others">
          <CropsOthers />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(CropsAdmin, ["admin", "asst_admin"], "crops");
