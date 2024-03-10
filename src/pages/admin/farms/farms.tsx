import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BarDistrictOverview from "../charts/bar-district-overview";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@components/ui/card";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import useGetRequestFarmOverview from "../../../hooks/api/get/useGetRequestFarmOverview";
import { Label } from "@components/ui/label";
import { Link } from "react-router-dom";

const breadcrumbItems = [{ title: "Farm Management", link: "/admin/farm" }];

const Farms = () => {
  const { data: farmOverView } = useGetRequestFarmOverview();

  return (
    <AdminOutletContainer className="container mx-auto py-10">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight mb-5">Farm Overview</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="flex justify-start items-center flex-wrap">
          <CardHeader>
            <Label>Pending Farm Applications</Label>
            <CardTitle>{farmOverView?.pending_farm_applications}</CardTitle>
            <CardDescription className="text-green-500 font-poppins-semibold">
              <Link to="/admin/community/farms/pending">
                See all application
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex justify-start items-center">
          <CardHeader>
            <Label>Total Community Farm Registered</Label>
            <CardTitle>{farmOverView?.accepted_requests}</CardTitle>
            <CardDescription className="text-green-500 font-poppins-semibold">
              <Link to="/admin/community/farms/registered">See all farms</Link>
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex justify-start items-center">
          <CardHeader>
            <Label>Total Registered Farmer</Label>
            <CardTitle>{farmOverView?.total_farmers}</CardTitle>
            <CardDescription>from district 1-6</CardDescription>
          </CardHeader>
        </Card>
        <Card className="col-span-full p-5">
          <div className="h-96">
            <BarDistrictOverview />
          </div>
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(Farms, ["admin", "asst_admin"], "farms");
