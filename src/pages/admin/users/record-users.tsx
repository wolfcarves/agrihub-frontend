import React, { useMemo } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import TableUserActive from "../../../components/admin/user/table/table-user-active/table-user-active";
import { useParams, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import TableUserReported from "@components/admin/user/table/table-user-reported/table-user-reported";
import TableUserBanned from "@components/admin/user/table/table-user-banned/table-user-banned";

const breadcrumbItems = [
  { title: "User Management", link: "/admin/record/users" },
  { title: "Users", link: "/admin/record/users" }
];
const RecordUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      tab: searchParams.get("tab") || "active"
    };
  }, [searchParams]);

  const setTab = (value: string) => {
    searchParams.set("tab", value);
    setSearchParams(searchParams);
  };
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      <p className="text-sm text-muted-foreground">Manage all users.</p>
      <hr className="my-4" />
      <Tabs value={params.tab}>
        <TabsList>
          <TabsTrigger value="active" onClick={() => setTab("active")}>
            Active
          </TabsTrigger>
          <TabsTrigger value="reported" onClick={() => setTab("reported")}>
            Reported
          </TabsTrigger>
          <TabsTrigger value="banned" onClick={() => setTab("banned")}>
            Banned
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <TableUserActive />
        </TabsContent>

        <TabsContent value="reported">
          <TableUserReported />
        </TabsContent>

        <TabsContent value="banned">
          <TableUserBanned />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(RecordUsers, ["admin", "asst_admin"]);
