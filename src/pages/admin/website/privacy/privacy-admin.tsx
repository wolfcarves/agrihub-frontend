import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";

const breadcrumbItems = [
  {
    title: "Privacy Policy",
    link: "/admin/website/privacy-policy"
  }
];

const PrivacyAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Privacy Policy</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Liver lover boi, secured ang iyong bituka sa sinigang na manok sa may
        tinola.
      </p>
      <hr className="my-4" />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  PrivacyAdmin,
  ["admin", "asst_admin"],
  "privacy_policy"
);
