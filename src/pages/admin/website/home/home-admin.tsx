import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import CaptureWithDelete from "@components/ui/custom/input/capture-with-delete";
import { AspectRatio } from "@components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/ui/carousel";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import Capture from "@components/user/community/capture/capture";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import AwsUploader from "../../../../components/user/community/uploader/uploader";
import IconSelector from "../../../../components/user/community/Icon-selector/icon-selector";
import useGetCmsLandingDetails from "../../../../hooks/api/get/useGetCmsLandingDetails";
import { IoTrashOutline } from "react-icons/io5";
import { toast } from "sonner";
import useDeleteCmsLandingApproach from "../../../../hooks/api/delete/useDeleteCmsLandingApproach";
import DialogAddAprroach from "../../../../components/admin/home/dialog-add-aprroach";

const breadcrumbItems = [
  {
    title: "Home Page",
    link: "/admin/website/home"
  }
];

const HomeAdmin = () => {
  const { data: landingData } = useGetCmsLandingDetails();
  console.log(landingData);

  //handle delete approach
  const { mutateAsync: deleteApproach, isLoading: isDeleteLoading } =
    useDeleteCmsLandingApproach();
  const handleDeleteApproach = async (id: string) => {
    await deleteApproach(id);
    toast.success("Approach Deleted Successfully!");
  };
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Home page contents
        </h2>
      </div>
      <p className="text-sm text-muted-foreground">
        This includes call to action section and our approach
      </p>
      <hr className="my-4" />
      <div className="mx-8">
        <h3 className="font-bold my-2">Carousel items</h3>

        <div>
          <AwsUploader
            // onChange={data => form.setValue("logo", data)}
            defaultValue={landingData?.images[0]}
            // onDelete={() => form.setValue("logo", "")}
          />
        </div>
        <div className="my-4">
          <div className="w-full mb-4">
            <Label>Carousel Header Text</Label>
            <Input
              type="text"
              placeholder="input cta header here"
              defaultValue={landingData?.cta_header}
            />
          </div>

          <div className="mb-4">
            <Label>Carousel Body Text</Label>
            <Textarea defaultValue={landingData?.cta_description} />
          </div>

          <div className="mb-4">
            <Label>`Our Approach</Label>
            <Textarea defaultValue={landingData?.approach} />
          </div>
          <div className="grid grid-cols-10 gap-3">
            {landingData?.aproach_items?.map((approach, i) => (
              <div
                key={i}
                className=" col-span-5 grid grid-cols-10 bg-white border border-border rounded-md p-4 relative"
              >
                <div className="absolute flex gap-1 top-1 right-1">
                  <IoTrashOutline
                    onClick={() => handleDeleteApproach(approach.id)}
                    size={25}
                    className="  border p-1 rounded-full text-red-600 border-red-400/45 bg-red-300/30 hover:animate-pulse"
                  />
                  <DialogAddAprroach approachId={approach.id} />
                </div>
                <div className=" col-span-2">{approach.icon}</div>
                <div className=" col-span-8">
                  <h4 className=" font-poppins-regular">{approach.title}</h4>
                  <p className=" text-sm">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(HomeAdmin, ["admin", "asst_admin"]);
