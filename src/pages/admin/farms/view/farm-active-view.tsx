import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import Input from "@components/ui/custom/input/input";
import { Label } from "@components/ui/label";
import React from "react";
import FarmActiveDetails from "./farm-active/farm-active-details";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import FarmActiveCrops from "./farm-active/farm-active-crops";
import CropsReportTable from "../../../../components/user/community/crops-report/crops-report-table/crops-report-table";

const breadcrumbItems = [
  {
    title: "Community Farms",
    link: "/admin/community/farms/"
  },
  {
    title: "Farm Details",
    link: "/admin/community/farms/view/8700"
  }
];
const FarmActiveView = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Community Details
          </h2>
          <p className="text-sm text-muted-foreground">
            See all details about this community.
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <Tabs defaultValue="details" className="w-full">
        <div className="w-full flex justify-between">
          <div>
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="report">Report</TabsTrigger>
              <TabsTrigger value="request">Request</TabsTrigger>
              <TabsTrigger value="problem">Problem</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="details">
          <Card className="p-5">
            <FarmActiveDetails />
            <FarmActiveCrops />
            <hr className="my-4" />
            <h2 className="text-xl font-bold tracking-tight">Gallery:</h2>
          </Card>
        </TabsContent>
        <TabsContent value="report">
          <Card className="p-5">
            <div className="md:px-10 px-2 py-6 ">
              <div className="flex justify-between">
                <h3 className=" font-poppins-semibold">Crops Report</h3>
              </div>
              <hr className="my-3 border-primary" />
              <CropsReportTable />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="request">
          <Card className="p-5">Reports Table here</Card>
        </TabsContent>
        <TabsContent value="problem">
          <Card className="p-5">Reports Table here</Card>
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default FarmActiveView;
