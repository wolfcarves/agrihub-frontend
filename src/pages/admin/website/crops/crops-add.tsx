import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import CropsForm from "@components/admin/website/crops/forms/crops-form";
import BackButton from "@components/ui/custom/button/back-button";

const breadcrumbItems = [
  {
    title: "Crops",
    link: "/admin/website/crops"
  },
  {
    title: "New Crops",
    link: "/admin/website/crops/add"
  }
];

const AddCropsAdmin = () => {
  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex gap-4">
            <BackButton /> Crops
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage all registered and unregistered crops within the community
          </p>
        </div>
      </div>
      <hr className="my-4" />

      <div className="w-full">
        <CropsForm />
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(AddCropsAdmin, ["admin", "asst_admin"], "crops");
