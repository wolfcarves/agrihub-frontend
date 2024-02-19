import React from "react";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Button } from "@components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/ui/accordion";
import EventDetailForm from "../../../../components/admin/events/form/event-detail-form/event-detail-form";
import EventSpeakerPage from "../../../../components/admin/events/form/event-speaker-form/event-speaker-page";
import EventPartnerPage from "../../../../components/admin/events/form/event-partner-form/event-partner-page";
import useGetEventsDraftView from "../../../../hooks/api/get/useGetEventsDraftView";
import useDeleteEventDraft from "../../../../hooks/api/delete/useDeleteEventDraft";
import { toast } from "sonner";
import usePutEventsUnpublish from "../../../../hooks/api/put/usePutEventsUnpublish";
import useDeleteEventArchive from "../../../../hooks/api/delete/useDeleteEventArchive";
import usePutEventsPublish from "../../../../hooks/api/put/usePutEventsPublish";

const breadcrumbItems = [
  { title: "Resource Management", link: "/admin/resources" },
  { title: "Events", link: "/admin/resource/events" },
  { title: "Add New Event", link: "/admin/resource/blogs/add" }
];

const AddEvents = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { data: eventData } = useGetEventsDraftView(eventId || "");
  console.log(eventData);

  const { mutateAsync: deleteDraft } = useDeleteEventDraft();
  const handleDeleteDraft = async () => {
    await deleteDraft(eventId || "");
    toast.success("Draft Deleted Successfully!");
    navigate("/admin/resource/events-draft");
  };

  const { mutateAsync: unpublishMaterial } = usePutEventsUnpublish();
  const handleUnpublish = async () => {
    await unpublishMaterial(eventId || "");
    toast.success("Unpublished Successfully!");
    navigate("/admin/resource/events-draft");
  };

  const { mutateAsync: archiveMaterial } = useDeleteEventArchive();
  const handleArchive = async () => {
    await archiveMaterial(eventId || "");
    toast.success("Archive Successfully!");
    navigate("/admin/resource/events-archives");
  };

  const { mutateAsync: publishMaterial } = usePutEventsPublish();
  const handlePublish = async () => {
    try {
      await publishMaterial(eventId || "");
      toast.success("Published Successfully!");
      navigate("/admin/resource/events");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">New Event Form</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Add new event here and complete all required fields for publication.
        Click 'Publish' to make your article public.
      </p>
      <hr className="my-4" />
      <div className="max-w-[60rem] mx-auto">
        <>
          <EventDetailForm />

          <Accordion type="single" collapsible className="w-full my-10">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Speaker
              </AccordionTrigger>
              <AccordionContent>
                <EventSpeakerPage />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-poppins-medium [&[data-state=open]]:text-primary">
                Event Partners
              </AccordionTrigger>
              <AccordionContent>
                <EventPartnerPage />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* ==================================bu-ons======================================== */}
          <div className="flex gap-4 justify-end mt-4">
            {eventData?.status === "draft" ? (
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
                      Archieve
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
                        Archieve
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
        </>
      </div>
    </AdminOutletContainer>
  );
};

export default AddEvents;
