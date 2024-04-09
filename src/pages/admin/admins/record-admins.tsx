import React, { useMemo } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
const breadcrumbItems = [
  { title: "Admin Management", link: "/admin/record/admins" },
  { title: "Admin", link: "/admin/record/admins" }
];
import TableAdminList from "../../../components/admin/admins/table-admin-list/table-admin-list";
import DialogCreateAdmin from "../../../components/admin/admins/dialog-create-admin/dialog-create-admin";
import TableAdminDisabled from "@components/admin/admins/table-admin-disabled/table-admin-disabled";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { useParams, useSearchParams } from "react-router-dom";

const RecordAdmins: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      tab: searchParams.get("tab") || "active"
    };
  }, [searchParams]);

  const setTab = (value: string) => {
    searchParams.set("tab", value);
    searchParams.delete("page");
    setSearchParams(searchParams);
  };
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Accounts</h2>
          <p className="text-sm text-muted-foreground">Manage all admins.</p>
        </div>

        {/* new admin */}
        <DialogCreateAdmin />
      </div>
      <hr className="my-4" />
      <Tabs value={params.tab}>
        <TabsList>
          <TabsTrigger value="active" onClick={() => setTab("active")}>
            Active
          </TabsTrigger>
          <TabsTrigger value="disabled" onClick={() => setTab("disabled")}>
            Disabled
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <TableAdminList />
        </TabsContent>

        <TabsContent value="disabled">
          <TableAdminDisabled />
        </TabsContent>
      </Tabs>
      {/* <TableAdminList /> */}
    </AdminOutletContainer>
  );
};

export default withAuthGuard(RecordAdmins, ["admin", "asst_admin"], "admin");
