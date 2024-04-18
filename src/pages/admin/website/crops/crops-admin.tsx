import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import CropsRegistered from "./crops-registered";
import CropsOthers from "./crops-others";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Button } from "@components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import TableCropsArchived from "../../../../components/admin/website/crops/table/table-crops-archived/table-crops-archived";

const breadcrumbItems = [
  {
    title: "Crops",
    link: "/admin/website/crops"
  }
];

const CropsAdmin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      tab: searchParams.get("tab") || "registered"
    };
  }, [searchParams]);

  const setTab = (value: string) => {
    searchParams.set("tab", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  };
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
      <Tabs value={params.tab}>
        <TabsList>
          <TabsTrigger value="registered" onClick={() => setTab("registered")}>
            Registered
          </TabsTrigger>
          <TabsTrigger value="others" onClick={() => setTab("others")}>
            Others
          </TabsTrigger>
          <TabsTrigger value="archive" onClick={() => setTab("archive")}>
            Archived
          </TabsTrigger>
        </TabsList>

        <TabsContent value="registered">
          <CropsRegistered />
        </TabsContent>

        <TabsContent value="others">
          <CropsOthers />
        </TabsContent>
        <TabsContent value="archive">
          <TableCropsArchived />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(CropsAdmin, ["admin", "asst_admin"], "crops");
