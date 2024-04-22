import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import TableToolAccepted from "@components/admin/tool-request/table-tool-accepted/table-tool-accepted";
import TableToolCommunicating from "@components/admin/tool-request/table-tool-communicating/table-tool-communicating";
import TableToolForwarded from "@components/admin/tool-request/table-tool-forwarded/table-tool-forwarded";
import TableToolPending from "@components/admin/tool-request/table-tool-pending/table-tool-pending";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import TableToolCompleted from "../../../components/admin/tool-request/table-tool-completed/table-tool-completed";
import TableToolRejected from "@components/admin/tool-request/table-tool-rejected/table-tool-rejected";

const breadcrumbItems = [
  { title: "Farm Management", link: "/admin/community" },
  { title: "Farms", link: "/admin/community/farms" },
  {
    title: "Tool Request",
    link: "/admin/community/tool-request"
  }
];

const ToolReqeust = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      tab: searchParams.get("tab") || "pending"
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
      <h2 className="text-3xl font-bold tracking-tight">Tool Request</h2>
      <p className="text-sm text-muted-foreground w-11/12">
        Manage and process requests for agricultural tools and equipment to
        support farming activities. Enable users to submit requests for specific
        tools or machinery needed for their farming operations. Streamline the
        request review and fulfillment process to ensure timely access to
        essential resources, enhancing productivity and efficiency on the farm
      </p>
      <hr className="my-4" />
      <Tabs value={params.tab}>
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="pending" onClick={() => setTab("pending")}>
            Pending
          </TabsTrigger>
          <TabsTrigger value="forwarded" onClick={() => setTab("forwarded")}>
            Forwarded
          </TabsTrigger>
          <TabsTrigger value="accepted" onClick={() => setTab("accepted")}>
            Accepted
          </TabsTrigger>
          <TabsTrigger
            value="communicating"
            onClick={() => setTab("communicating")}
          >
            Communicating
          </TabsTrigger>

          <TabsTrigger value="completed" onClick={() => setTab("completed")}>
            Completed
          </TabsTrigger>
          <TabsTrigger value="rejected" onClick={() => setTab("rejected")}>
            Rejected
          </TabsTrigger>
        </TabsList>
        <TabsContent value="communicating">
          <TableToolCommunicating />
        </TabsContent>
        <TabsContent value="accepted">
          <TableToolAccepted />
        </TabsContent>
        <TabsContent value="pending">
          <TableToolPending />
        </TabsContent>
        <TabsContent value="forwarded">
          <TableToolForwarded />
        </TabsContent>
        <TabsContent value="completed">
          <TableToolCompleted />
        </TabsContent>
        <TabsContent value="rejected">
          <TableToolRejected />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default ToolReqeust;
