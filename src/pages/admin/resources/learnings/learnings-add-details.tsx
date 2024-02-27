import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Button } from "@components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@components/ui/alert-dialog";
import { useParams } from "react-router-dom";
import LearningCreditForm from "../../../../components/admin/learning-materials/form/learning-credit-form/learning-credit";
import LearningDetailForm from "../../../../components/admin/learning-materials/form/learning-detail-form/learning-detail-form";
import LearningResourceForm from "../../../../components/admin/learning-materials/form/learning-resource-form/learning-resource";
import LearningTagsForm from "../../../../components/admin/learning-materials/form/learning-tags-form/learning-tags-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../../../components/ui/accordion";
import useDeleteLearningDraftDelete from "../../../../hooks/api/delete/useDeleteLearningDraftDelete";
import { toast } from "sonner";
import useDeleteLearningUnpublish from "../../../../hooks/api/delete/useDeleteLearningUnpublish";
import useDeleteLearningArchive from "../../../../hooks/api/delete/useDeleteLearningArchive";
import usePutLearningPublish from "../../../../hooks/api/put/usePutLearningPublish";
import useGetLearningView from "../../../../hooks/api/get/useGetLearningView";
import withAuthGuard from "@higher-order/account/withAuthGuard";

const UpdateLearnings = () => {
  const { learningsId } = useParams();
  const navigate = useNavigate();
  const { data: LearningData, isLoading: LearningDataLoading } =
    useGetLearningView(learningsId || "");
  console.log(LearningData);

  const { mutateAsync: deleteDraft } = useDeleteLearningDraftDelete();
  const handleDeleteDraft = async () => {
    await deleteDraft(learningsId || "");
    toast.success("Draft Deleted Successfully!");
    navigate("/admin/resource/learnings");
  };

  const { mutateAsync: unpublishMaterial } = useDeleteLearningUnpublish();
  const handleUnpublish = async () => {
    await unpublishMaterial(learningsId || "");
    toast.success("Unpublished Successfully!");
    navigate("/admin/resource/learnings-draft");
  };

  const { mutateAsync: archiveMaterial } = useDeleteLearningArchive();
  const handleArchive = async () => {
    await archiveMaterial(learningsId || "");
    toast.success("Archive Successfully!");
    navigate("/admin/resource/learnings-archives");
  };

  const { mutateAsync: publishMaterial } = usePutLearningPublish();
  const handlePublish = async () => {
    try {
      await publishMaterial(learningsId || "");
      toast.success("Published Successfully!");
      navigate("/admin/resource/learnings");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  // breadcrumbs
  const breadcrumbItems = [
    { title: "Resource Management", link: "/admin/resources" },
    { title: "Learnings", link: "/admin/resource/events" },
    {
      title: `View Learning Material ${learningsId}`,
      link: `/admin/resource/learnings/view/${learningsId}`
    }
  ];

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Learning Material# {learningsId}
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Complete your draft, after publishing this material it will be visible
        to public. You can also save your progress in draft or delete it.
      </p>
      <hr className="my-4" />
      <div className="max-w-[60rem] mx-auto">
        <div>
          <LearningDetailForm />
          <Accordion type="single" collapsible className="w-full mt-5">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Tags
              </AccordionTrigger>
              <AccordionContent>
                <LearningTagsForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Resource
              </AccordionTrigger>
              <AccordionContent>
                <LearningResourceForm />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Credits
              </AccordionTrigger>
              <AccordionContent>
                <LearningCreditForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* ==================================bu-ons======================================== */}
          <div className="flex gap-4 justify-end mt-4">
            {LearningData?.status === "draft" ? (
              <>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      className="hover:border-red-500"
                    >
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Draft?</AlertDialogTitle>
                      <AlertDialogDescription>
                        When you delete learning material draft it will be
                        remove totally in our system
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction
                        onClick={handleDeleteDraft}
                        className="bg-red-600 hover:bg-red-500 hover:text-black"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Publish Material</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to upload this material?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This learning material can be seen publicly by the users
                        when published, make sure to review everything before
                        publishing.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction onClick={handlePublish}>
                        Publish
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            ) : (
              <>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:text-white hover:bg-red-500"
                    >
                      Archive
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Archive Material?</AlertDialogTitle>
                      <AlertDialogDescription>
                        When you archieve learning material it will go to
                        archieve and you can recover it from there.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction
                        onClick={handleArchive}
                        className="bg-red-600 hover:bg-red-500 hover:text-black"
                      >
                        Archive
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant={"destructive"}>Unpublish Material</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to unpublish this material?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This learning material will can't be seen in public
                        anymore.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction onClick={handleUnpublish}>
                        Unpublish
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
          </div>
        </div>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  UpdateLearnings,
  ["admin", "asst_admin"],
  "learning"
);
