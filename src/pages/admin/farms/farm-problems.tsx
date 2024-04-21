import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Button } from "@components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import FarmProblemsCommon from "@components/admin/farms/table/farm-problems-common";
import FarmProblemsArchived from "@components/admin/farms/table/farm-problems-archived";
import FarmProblemsUnusual from "../../../components/admin/farms/table/farm-problems-unusual";

const breadcrumbItems = [
  {
    title: "Farm Problems",
    link: "/admin/farm/problems"
  }
];

const FarmProblemsAdmin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      tab: searchParams.get("tab") || "common"
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
          <h2 className="text-3xl font-bold tracking-tight">Problems</h2>
        </div>
        <Link to="/admin/community/problems/add">
          <Button>+ Problems</Button>
        </Link>
      </div>
      <p className="text-sm text-muted-foreground w-11/12">
        Provide a platform for farmers to report and address challenges
        encountered in their farming operations. Enable users to submit
        descriptions of farm-related issues, such as pest infestations, crop
        diseases, or soil degradation. Facilitate collaboration and support
        among the agricultural community to troubleshoot problems, share
        solutions, and promote resilience in farming practices.
      </p>
      <hr className="my-4" />
      <Tabs value={params.tab}>
        <TabsList>
          <TabsTrigger value="common" onClick={() => setTab("common")}>
            Common
          </TabsTrigger>
          <TabsTrigger value="archived" onClick={() => setTab("archived")}>
            Archived
          </TabsTrigger>
          <TabsTrigger value="unusual" onClick={() => setTab("unusual")}>
            Unusual
          </TabsTrigger>
        </TabsList>

        <TabsContent value="common">
          <FarmProblemsCommon />
        </TabsContent>

        <TabsContent value="archived">
          <FarmProblemsArchived />
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
