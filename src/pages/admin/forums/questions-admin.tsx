import React from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../components/ui/custom/breadcrumb/breadcrumb";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import QuestionsPosted from "./questions-posted";
import QuestionsReported from "./questions-reported";
import QuestionsArchive from "./questions-archive";
import { useParams } from "react-router-dom";

const breadcrumbItems = [
  { title: "Forum Management", link: "/admin/forum" },
  { title: "Questions", link: "/admin/forum/questions" }
];
const QuestionsAdmin = () => {
  const { tab }: any = useParams();
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Questions</h2>
      <p className="text-sm text-muted-foreground">
        Manage all question and answer in forums.
      </p>
      <hr className="my-4" />
      <Tabs defaultValue={tab || "posted"}>
        <TabsList>
          <TabsTrigger value="posted">Posted</TabsTrigger>
          <TabsTrigger value="reported">Reported</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="posted">
          <QuestionsPosted />
        </TabsContent>

        <TabsContent value="reported">
          <QuestionsReported />
        </TabsContent>

        <TabsContent value="archived">
          <QuestionsArchive />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(QuestionsAdmin, ["admin", "asst_admin"], "forums");
