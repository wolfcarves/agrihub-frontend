import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useEffect, useState } from "react";
import useGetCmsLandingDetails from "../../../../hooks/api/get/useGetCmsLandingDetails";
import { IoTrashOutline } from "react-icons/io5";
import { toast } from "sonner";
import useDeleteCmsLandingApproach from "../../../../hooks/api/delete/useDeleteCmsLandingApproach";
import useDeleteCmsLandingImage from "../../../../hooks/api/delete/useDeleteCmsLandingImage";
import AwsUploader from "../../../../components/admin/home/uploader";
import Loader from "../../../../icons/Loader";
import * as zod from "zod";
import usePutCmsLandingUpdate from "../../../../hooks/api/put/usePutCmsLandingUpdate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateLandingRequest } from "../../../../api/openapi";
import { Form } from "../../../../components/ui/form";
import { Button } from "../../../../components/ui/button";
import * as Icons from "react-icons/bi";
import { renderIcon } from "../../../../components/lib/RenderIcon";
import DialogEditAprroach from "../../../../components/admin/home/dialog-edit-aprroach";
import DialogAddAprroach from "../../../../components/admin/home/dialog-add-aprroach";
type IconType = keyof typeof Icons;
const updateLandingSchema = zod.object({
  cta_header: zod
    .string({
      required_error: "Header is required."
    })
    .min(5, "Please enter at least 5 characters"),

  cta_description: zod
    .string({
      required_error: "Description is required."
    })
    .min(5, "Please enter at least 5 characters"),
  approach: zod
    .string({
      required_error: "Approach is required."
    })
    .min(5, "Please enter at least 5 characters")
});

const breadcrumbItems = [
  {
    title: "Home Page",
    link: "/admin/website/home"
  }
];

const HomeAdmin = () => {
  const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
  const { data: landingData, isLoading: landingLoading } =
    useGetCmsLandingDetails();
  console.log(landingData);

  //form
  const form = useForm<UpdateLandingRequest>({
    resolver: zodResolver(updateLandingSchema),
    mode: "onBlur"
  });
  useEffect(() => {
    const isChanged =
      form.watch("cta_header") !== landingData?.cta_header ||
      form.watch("cta_description") !== landingData?.cta_description ||
      form.watch("approach") !== landingData?.approach;

    setIsFormChanged(isChanged);
  }, [
    landingData,
    form.watch("cta_header"),
    form.watch("cta_description"),
    form.watch("approach")
  ]);

  // validations
  useEffect(() => {
    if (form.formState.errors.cta_header) {
      toast.error(form?.formState?.errors?.cta_header?.message);
    }
    if (form.formState.errors.cta_description) {
      toast.error(form?.formState?.errors?.cta_description?.message);
    }
    if (form.formState.errors.approach) {
      toast.error(form?.formState?.errors?.approach?.message);
    }
  }, [form.formState.errors]);

  //edit
  const { mutateAsync: updateDetailMutate, isLoading: isDetailLoading } =
    usePutCmsLandingUpdate();

  //submit form
  const handleSubmitForm = async (data: UpdateLandingRequest) => {
    const compiledData: UpdateLandingRequest = {
      cta_header: data.cta_header,
      cta_description: data.cta_description,
      approach: data.approach
    };
    try {
      await updateDetailMutate({
        requestBody: compiledData
      });
      toast.success("Landing Details Updated Successfully!");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  //handle delete approach
  const { mutateAsync: deleteApproach, isLoading: isDeleteLoading } =
    useDeleteCmsLandingApproach();
  const handleDeleteApproach = async (id: string) => {
    await deleteApproach(id);
    toast.success("Approach Deleted Successfully!");
  };

  //handle delete image
  const { mutateAsync: deleteImage, isLoading: isDeleteImage } =
    useDeleteCmsLandingImage();
  const handleDeleteImage = async (id: string) => {
    await deleteImage(id);
    toast.success("Image Deleted Successfully!");
  };
  if (landingLoading) {
    return <Loader isVisible={landingLoading} />;
  }
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

        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(handleSubmitForm)}>
            <div className="grid grid-cols-12 gap-3">
              <div className=" md:col-span-6 col-span-12">
                <AwsUploader
                  defaultValue={landingData?.images?.[0]?.image}
                  onDelete={() =>
                    handleDeleteImage(landingData?.images?.[0]?.id || "")
                  }
                />
              </div>
              <div className=" md:col-span-6 col-span-12">
                <div className="w-full mb-4">
                  <Label className=" font-poppins-medium">
                    Carousel Header Text
                  </Label>
                  <Input
                    type="text"
                    placeholder="input cta header here"
                    defaultValue={landingData?.cta_header}
                    {...form.register("cta_header")}
                  />
                </div>

                <div className="mb-4">
                  <Label className=" font-poppins-medium">
                    Carousel Body Text
                  </Label>
                  <Textarea
                    className="h-[9rem] custom-scroll"
                    defaultValue={landingData?.cta_description}
                    {...form.register("cta_description")}
                  />
                </div>
              </div>
              <div className="mb-4 col-span-12">
                <Label className=" font-poppins-medium">`Our Approach</Label>
                <Textarea
                  className=" custom-scroll"
                  defaultValue={landingData?.approach}
                  {...form.register("approach")}
                />
              </div>
              <div className=" col-span-12 flex justify-end">
                <Button type="submit" disabled={!isFormChanged}>
                  Update
                </Button>
              </div>
            </div>
          </form>
        </Form>

        <div className="mb-4 mt-10">
          <h3 className="font-bold my-2">Approach items</h3>
          <div className="grid grid-cols-10 gap-3">
            {landingData?.approach_items?.map((approach, i) => (
              <div
                key={i}
                className=" col-span-10 lg:col-span-5 grid grid-cols-10 bg-white border border-border rounded-md p-4 relative"
              >
                <div className="absolute flex gap-1 top-1 right-1">
                  <IoTrashOutline
                    onClick={() => handleDeleteApproach(approach.id || "")}
                    size={25}
                    className="  border p-1 rounded-full text-red-600 border-red-400/45 bg-red-300/30 hover:animate-pulse"
                  />
                  <DialogEditAprroach approachId={approach.id || ""} />
                </div>
                <div className=" col-span-2 flex justify-center items-center text-primary">
                  {renderIcon(approach.icon as IconType, { size: 50 })}
                </div>
                <div className=" col-span-8">
                  <h4 className=" font-poppins-regular">{approach.title}</h4>
                  <p className=" text-sm">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <DialogAddAprroach />
          </div>
        </div>
      </div>
      <Loader isVisible={isDeleteImage || isDeleteLoading || isDetailLoading} />
    </AdminOutletContainer>
  );
};

export default withAuthGuard(HomeAdmin, ["admin", "asst_admin"]);
