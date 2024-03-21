import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
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
import { AspectRatio } from "@components/ui/aspect-ratio";
import { Button } from "@components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import CaptureWithDelete from "@components/ui/custom/input/capture-with-delete";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import Capture from "@components/user/community/capture/capture";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import useGetCmsAboutDetails from "../../../../hooks/api/get/useGetCmsAboutDetails";

const breadcrumbItems = [
  {
    title: "About Us Page",
    link: "/admin/website/user-feedback"
  }
];

const AboutAdmin = () => {
  const { data: aboutData } = useGetCmsAboutDetails();
  console.log(aboutData, "asdd");
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">About Us Page</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Manage about us page by customizing carousel, about us details and
        messages from respective ferzons.
      </p>
      <hr className="my-4" />
      <div className="mx-8">
        <div className="mb-4">
          {/* about us banner */}
          <Label>Banner</Label>
          <CaptureWithDelete />
        </div>
        <hr className="my-4" />
        {/* about us  */}
        <div>
          <Label>About Us</Label>
          <Textarea className=" h-64" />
        </div>
        <hr className="my-4" />
        {/* about us carousel */}
        <h3 className="font-bold my-2">Carousel items</h3>
        <Carousel className="mb-4">
          <CarouselPrevious className="mt-[8rem]" />
          <CarouselNext className="mt-[8rem]" />
          <CarouselContent className="-ml-2 md:-ml-4 h-64">
            {/* 1 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 2 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 3 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 4 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
            {/* 5 */}
            <CarouselItem className="pl-4 sm:basis-1/2">
              <AspectRatio ratio={16 / 9}>
                <CaptureWithDelete />
              </AspectRatio>
            </CarouselItem>{" "}
          </CarouselContent>
        </Carousel>
        <hr className="my-4" />
        {/* city commitment */}
        <h3 className="font-bold my-2">City Commitment</h3>
        <div className="flex gap-4">
          <div className="w-96">
            <Capture />
          </div>
          <Textarea />
        </div>
        <hr className="my-4" />
        {/* president message */}
        <h3 className="font-bold my-2">President Message</h3>
        <div className="flex gap-4">
          <Textarea />
          <div className="w-96">
            <Capture />
          </div>
        </div>
        <hr className="my-4" />
        {/* logos */}
        <div>
          <h3 className="font-bold my-2 text-center">Logos</h3>
          <div className="flex gap-4 w-full justify-between">
            <div className="text-center w-full">
              <Label>Agrihub User</Label>
              <CaptureWithDelete />
            </div>
            <div className="text-center w-full">
              <Label>University</Label>
              <CaptureWithDelete />
            </div>
            <div className="text-center w-full">
              <Label>Agrihub Admin</Label>
              <CaptureWithDelete />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 my-8">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button>Save</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure about this changes?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This changes is going to be seen by all the users, make sure
                  you put correct data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(AboutAdmin, ["admin", "asst_admin"], "about");
