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
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";
import Capture from "@components/user/community/capture/capture";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React from "react";
import useGetCmsAboutDetails from "../../../../hooks/api/get/useGetCmsAboutDetails";
import * as zod from "zod";
import { UpdateAboutUsRequest } from "../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "../../../../icons/Loader";
import { formatImage } from "../../../../components/lib/utils";
import { Form, FormField } from "../../../../components/ui/form";
import usePutCmsAboutUpdate from "../../../../hooks/api/put/usePutCmsAboutUpdate";
import { toast } from "sonner";
import AwsUploader from "./uploader";
import useDeleteCmsAboutImage from "../../../../hooks/api/delete/useDeleteCmsAboutImage";
const MAX_IMAGE_FILE_SIZE = 1024 * 1024 * 10; // 10MB

export const aboutDetailSchema = zod.object({
  banner: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload a banner")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional(),
  about_us: zod
    .string({
      required_error: "About us is required."
    })
    .min(3, "Please enter at least 3 characters"),
  city_image: zod
    .any()
    .refine(
      (file: Blob) => file !== undefined,
      "Please upload a city commitment image"
    )
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional(),
  city_commitment: zod
    .string({
      required_error: "City Commitment is required."
    })
    .min(3, "Please enter at least 3 characters"),
  president_image: zod
    .any()
    .refine(
      (file: Blob) => file !== undefined,
      "Please upload a president image"
    )
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional(),
  president_message: zod
    .string({
      required_error: "President message is required."
    })
    .min(3, "Please enter at least 3 characters"),
  agrihub_user_logo: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload agrihub logo")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional(),
  qcu_logo: zod
    .any()
    .refine((file: Blob) => file !== undefined, "Please upload university logo")
    .refine(
      (file: Blob) =>
        file?.size === undefined ? true : file.size <= MAX_IMAGE_FILE_SIZE,
      "Maximum image file size is 10MB"
    )
    .optional()
});

const breadcrumbItems = [
  {
    title: "About Us Page",
    link: "/admin/website/user-feedback"
  }
];

const AboutAdmin = () => {
  const { data: aboutData, isLoading: aboutDataLoading } =
    useGetCmsAboutDetails();
  console.log(aboutData, "asdd");

  //form
  const form = useForm<UpdateAboutUsRequest>({
    resolver: zodResolver(aboutDetailSchema),
    mode: "onBlur"
  });

  // // validations
  // useEffect(() => {
  //   if (form.formState.errors.language) {
  //     toast.error(form?.formState?.errors?.language?.message);
  //   }
  //   if (form.formState.errors.title) {
  //     toast.error(form?.formState?.errors?.title?.message);
  //   }
  //   if (form.formState.errors.content) {
  //     toast.error(form?.formState?.errors?.content?.message);
  //   }
  // }, [form.formState.errors]);

  //edit
  const { mutateAsync: updateDetailMutate, isLoading: isDetailLoading } =
    usePutCmsAboutUpdate();

  //submit form
  const handleSubmitForm = async (data: UpdateAboutUsRequest) => {
    const compiledData: UpdateAboutUsRequest = {
      banner: data.banner,
      about_us: data.about_us,
      city_image: data.city_image,
      city_commitment: data.city_commitment,
      president_image: data.president_image,
      president_message: data.president_message,
      agrihub_user_logo: data.agrihub_user_logo,
      qcu_logo: data.qcu_logo
    };
    try {
      await updateDetailMutate({
        formData: compiledData
      });
      toast.success("About Us Detail Updated Successfully!");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  //handle delete image
  const { mutateAsync: deleteImage, isLoading: isDeleteImage } =
    useDeleteCmsAboutImage();
  const handleDeleteImage = async (id: string) => {
    await deleteImage(id);
    toast.success("Image Deleted Successfully!");
  };

  if (aboutDataLoading) {
    return <Loader isVisible={true} />;
  }
  // console.log(form.formState.errors);
  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">About Us Page</h2>
      </div>
      <p className="text-sm text-muted-foreground w-10/12">
        Create the essence of your platform, highlighting its dedication to
        excellence and service. Share insights into the company's values, goals,
        and commitment to users. Customize this page to reflect the unique
        identity and purpose of your platform.
      </p>
      <hr className="my-4" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className="mx-8"
        >
          <div className="mb-4">
            {/* about us banner */}
            <Label>Banner</Label>
            <FormField
              control={form.control}
              name="banner"
              render={() => (
                <CaptureWithDelete
                  onChange={value => form.setValue("banner", value)}
                  defaultValue={formatImage(aboutData?.banner || "")}
                />
              )}
            />
          </div>
          <hr className="my-4" />
          {/* about us  */}
          <div>
            <Label>About Us</Label>
            <Textarea
              defaultValue={aboutData?.about_us}
              {...form.register("about_us")}
              className=" h-64"
            />
          </div>
          <hr className="my-4" />
          {/* about us carousel */}
          <h3 className="font-bold my-2">Carousel items</h3>
          <Carousel className="mb-4">
            <CarouselPrevious type="button" className="mt-[8rem]" />
            <CarouselNext type="button" className="mt-[8rem]" />
            <CarouselContent className="-ml-2 md:-ml-4 h-64">
              {/* 1 */}
              <CarouselItem className="pl-4 sm:basis-1/2">
                <AspectRatio ratio={16 / 9}>
                  {/* <CaptureWithDelete /> */}
                  <AwsUploader
                    defaultValue={aboutData?.images?.[0]?.image}
                    onDelete={() =>
                      handleDeleteImage(aboutData?.images?.[0]?.id || "")
                    }
                  />
                </AspectRatio>
              </CarouselItem>{" "}
              {/* 2 */}
              <CarouselItem className="pl-4 sm:basis-1/2">
                <AspectRatio ratio={16 / 9}>
                  <AwsUploader
                    defaultValue={aboutData?.images?.[1]?.image}
                    onDelete={() =>
                      handleDeleteImage(aboutData?.images?.[1]?.id || "")
                    }
                  />
                </AspectRatio>
              </CarouselItem>{" "}
              {/* 3 */}
              <CarouselItem className="pl-4 sm:basis-1/2">
                <AspectRatio ratio={16 / 9}>
                  <AwsUploader
                    defaultValue={aboutData?.images?.[2]?.image}
                    onDelete={() =>
                      handleDeleteImage(aboutData?.images?.[2]?.id || "")
                    }
                  />
                </AspectRatio>
              </CarouselItem>{" "}
              {/* 4 */}
              <CarouselItem className="pl-4 sm:basis-1/2">
                <AspectRatio ratio={16 / 9}>
                  <AwsUploader
                    defaultValue={aboutData?.images?.[3]?.image}
                    onDelete={() =>
                      handleDeleteImage(aboutData?.images?.[3]?.id || "")
                    }
                  />
                </AspectRatio>
              </CarouselItem>{" "}
              {/* 5 */}
              <CarouselItem className="pl-4 sm:basis-1/2">
                <AspectRatio ratio={16 / 9}>
                  <AwsUploader
                    defaultValue={aboutData?.images?.[4]?.image}
                    onDelete={() =>
                      handleDeleteImage(aboutData?.images?.[4]?.id || "")
                    }
                  />
                </AspectRatio>
              </CarouselItem>{" "}
            </CarouselContent>
          </Carousel>
          <hr className="my-4" />
          {/* city commitment */}
          <h3 className="font-bold my-2">City Commitment</h3>
          <div className="flex sm:flex-nowrap flex-wrap gap-4">
            <div className="w-full">
              <FormField
                control={form.control}
                name="city_image"
                render={() => (
                  <Capture
                    onChange={value => form.setValue("city_image", value)}
                    defaultValue={formatImage(aboutData?.city_image || "")}
                  />
                )}
              />
            </div>
            <Textarea
              defaultValue={aboutData?.city_commitment}
              {...form.register("city_commitment")}
            />
          </div>
          <hr className="my-4" />
          {/* president message */}
          <h3 className="font-bold my-2">President Message</h3>
          <div className="flex sm:flex-nowrap flex-wrap gap-4">
            <Textarea
              defaultValue={aboutData?.president_message}
              {...form.register("president_message")}
            />
            <div className="w-96">
              <FormField
                control={form.control}
                name="president_image"
                render={() => (
                  <Capture
                    onChange={value => form.setValue("president_image", value)}
                    defaultValue={formatImage(aboutData?.president_image || "")}
                  />
                )}
              />
            </div>
          </div>
          <hr className="my-4" />
          {/* logos */}
          <div>
            <h3 className="font-bold my-2 text-center">Logos</h3>
            <div className="flex gap-4 w-full justify-between">
              <div className="text-center w-full">
                <Label>Agrihub User</Label>

                <FormField
                  control={form.control}
                  name="agrihub_user_logo"
                  render={() => (
                    <CaptureWithDelete
                      onChange={value =>
                        form.setValue("agrihub_user_logo", value)
                      }
                      defaultValue={formatImage(
                        aboutData?.agrihub_user_logo || ""
                      )}
                    />
                  )}
                />
              </div>
              <div className="text-center w-full">
                <Label>University</Label>

                <FormField
                  control={form.control}
                  name="qcu_logo"
                  render={() => (
                    <CaptureWithDelete
                      onChange={value => form.setValue("qcu_logo", value)}
                      defaultValue={formatImage(aboutData?.qcu_logo || "")}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className="bottom-8 right-8 fixed">
            <Button type="submit">Save</Button>
            {/* <AlertDialog>
              <AlertDialogTrigger>
                <Button type="button">Save</Button>
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
            </AlertDialog> */}
          </div>
          <Loader isVisible={isDetailLoading || isDeleteImage} />
        </form>
      </Form>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(AboutAdmin, ["admin", "asst_admin"], "about");
