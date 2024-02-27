import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";

const breadcrumbItems = [
  {
    title: "Terms and Conditions",
    link: "/admin/website/terms-conditions"
  }
];

const TermsAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Terms and Condition
        </h2>
      </div>
      <p className="text-sm text-muted-foreground max-w-xl">
        terms of service and communication is the key to make the relationship
        strong kasi mali mo, kumaliwa ko eh tapos kumanan ka. Bakit wala kang
        helmet!?
      </p>
      <hr className="my-4" />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  TermsAdmin,
  ["admin", "asst_admin"],
  "terms_and_conditions"
);
