import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";

const breadcrumbItems = [
  {
    title: "About Us Page",
    link: "/admin/website/user-feedback"
  }
];

const AboutAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">About Us Page</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Manage about us page by customizing carousel, about us details and
        messages from respective ferzons.
      </p>
      <hr className="my-4" />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(AboutAdmin, ["admin", "asst_admin"]);
