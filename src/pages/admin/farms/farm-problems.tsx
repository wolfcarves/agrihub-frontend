import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { DataTable } from "@components/ui/custom/data-table/data-table";
import { data, columns } from "./table/columns-farm-problems";
import FarmProblemsCommon from "@components/admin/farms/table/farm-problems-common";
import FarmProblemsUnusual from "@components/admin/farms/table/farm-problems-unusual";

const breadcrumbItems = [
  {
    title: "Farm Problems",
    link: "/admin/farm/problems"
  }
];

const FarmProblemsAdmin = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Problems</h2>
          <p className="text-sm text-muted-foreground">
            Manage all registered and unregistered crops within the community
          </p>
        </div>
        <Link to="/admin/farm/problems/add">
          <Button>+ Problems</Button>
        </Link>
      </div>
      <hr className="my-4" />
      <Tabs defaultValue="common">
        <TabsList>
          <TabsTrigger value="common">Common</TabsTrigger>
          <TabsTrigger value="unusual">Unusual</TabsTrigger>
        </TabsList>

        <TabsContent value="common">
          <FarmProblemsCommon />
        </TabsContent>

        <TabsContent value="unusual">
          <FarmProblemsUnusual />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  FarmProblemsAdmin,
  ["admin", "asst_admin"],
  "farms"
);
