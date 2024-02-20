import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import ClientMembers from "./client-members";
import ClientSocials from "./client-socials";
import ClientDetails from "./client-details";
import ClientPartnerships from "./client-partnerships";

const breadcrumbItems = [
  {
    title: "Center for Urban Agriculture and Innovation",
    link: "/admin/website/client-details"
  }
];

const ClientAdmin = () => {
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Center for Urban Agriculture and Innovation
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Minanage ni kinember si berlalu para sa kalabasa.
      </p>
      <hr className="my-4" />

      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl font-bold tracking-tight">
          Center for Urban Agriculture and Innovation
        </h2>
      </div>

      {/* client details */}
      <ClientDetails />
      <hr className="my-4" />

      {/* social media section */}
      <ClientSocials />

      {/* members */}
      <ClientMembers />

      {/* partnership */}
      <ClientPartnerships />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(ClientAdmin, ["admin", "asst_admin"]);
