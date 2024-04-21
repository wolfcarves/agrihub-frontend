import React, { useMemo } from "react";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "../../../../components/ui/custom/breadcrumb/breadcrumb";

import withAuthGuard from "@higher-order/account/withAuthGuard";
import DialogAddLearning from "../../../../components/admin/learning-materials/dialogs/dialog-add-learning/dialog-add-learning";
import TableLearningMaterial from "../../../../components/admin/learning-materials/tables/table-learning-material/table-learning-material";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import TableLearningMaterialDraft from "@components/admin/learning-materials/tables/table-learning-material-draft/table-learning-material-draft";
import TableLearningMaterialArchive from "@components/admin/learning-materials/tables/table-learning-material-archive/table-learning-material-archive";
import { useSearchParams } from "react-router-dom";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Learning Materials", link: "/admin/resource/learnings" }
];
const LearningsAdmin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(() => {
    return {
      tab: searchParams.get("tab") || "published"
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
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Learning Materials
        </h2>
        <DialogAddLearning />
      </div>
      <p className="text-sm text-muted-foreground">
        Manage all learning materials.
      </p>
      <hr className="my-4" />
      <Tabs value={params.tab}>
        <TabsList>
          <TabsTrigger value="published" onClick={() => setTab("published")}>
            Published
          </TabsTrigger>
          <TabsTrigger value="draft" onClick={() => setTab("draft")}>
            Drafts
          </TabsTrigger>
          <TabsTrigger value="archived" onClick={() => setTab("archived")}>
            Archived
          </TabsTrigger>
        </TabsList>

        <TabsContent value="published">
          <TableLearningMaterial />
        </TabsContent>

        <TabsContent value="draft">
          <TableLearningMaterialDraft />
        </TabsContent>

        <TabsContent value="archived">
          <TableLearningMaterialArchive />
        </TabsContent>
      </Tabs>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  LearningsAdmin,
  ["admin", "asst_admin"],
  "learning"
);
