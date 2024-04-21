import React, { useMemo } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import QuestionsPosted from "./questions-posted";
import QuestionsReported from "./questions-reported";
import { useSearchParams } from "react-router-dom";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Questions", link: "/admin/forum/questions" }
];
const QuestionsAdmin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      tab: searchParams.get("tab") || "posted"
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
      <h2 className="text-3xl font-bold tracking-tight">Questions</h2>
      <p className="text-sm text-muted-foreground">
        Manage all question and answer in forums.
      </p>
      <hr className="my-4" />
      <Tabs value={params.tab}>
        <TabsList>
          <TabsTrigger value="posted" onClick={() => setTab("posted")}>
            Posted
          </TabsTrigger>
          <TabsTrigger value="reported" onClick={() => setTab("reported")}>
            Reported
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posted">
          <QuestionsPosted />
        </TabsContent>

        <TabsContent value="reported">
          <QuestionsReported />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(QuestionsAdmin, ["admin", "asst_admin"], "forums");
