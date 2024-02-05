import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetFarmViewQuery from "@hooks/api/get/useGetFarmViewQuery";
import { Input } from "../../../../ui/input";
import { Textarea } from "../../../../ui/textarea";
import CommunityUpload from "../../community-upload/community-upload";
import { Button } from "../../../../ui/button";
import { profileCommunitySchema } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateCommunityFarmRequest } from "../../../../../api/openapi";
import { toast } from "sonner";
import { Form, FormField } from "../../../../ui/form";
import SelectDistrict from "../../select-district/select-district";
import usePutFarmProfile from "../../../../../hooks/api/put/usePutFarmProfile";
import Loader from "../../../../../icons/Loader";

const CommunityProfileEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: farmDetails, isLoading: farmDetailsLoading } =
    useGetFarmViewQuery(id || "");

  const form = useForm<UpdateCommunityFarmRequest>({
    resolver: zodResolver(profileCommunitySchema),
    mode: "onBlur"
  });

  const { mutateAsync: updateFarmMutate, isLoading: isFarmProfileLoading } =
    usePutFarmProfile();

  const handleSubmitForm = async (data: UpdateCommunityFarmRequest) => {
    const compiledData: UpdateCommunityFarmRequest = {
      farm_name: data.farm_name,
      description: data.description,
      location: data.location,
      size: data.size,

      cover_photo: data.cover_photo,
      avatar: data.avatar,
      district: data.district
    };

    try {
      console.log(compiledData);
      await updateFarmMutate(compiledData);
      toast.success("Uploaded Successfully!");

      navigate("/community");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  // console.log(farmDetails);

  if (farmDetailsLoading) {
    return <Loader isVisible={farmDetailsLoading} />;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
        className="pb-10"
      >
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-center lg:col-span-5 col-span-12">
            <h5 className=" font-poppins-semibold">Community Profile</h5>
            <p className=" text-sm text-gray-500">
              Update your community photo and details here.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Name</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community name
            </p>
          </div>
          <Input
            defaultValue={farmDetails?.farm_name}
            {...form.register("farm_name")}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Description</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community description
            </p>
          </div>
          <Textarea
            defaultValue={farmDetails?.description}
            {...form.register("description")}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2 bg-transparent"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Logo</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community logo
            </p>
          </div>
          <div className=" lg:col-span-6 col-span-12 ">
            <FormField
              control={form.control}
              name="avatar"
              render={() => (
                <CommunityUpload
                  onChange={value => form.setValue("avatar", value)}
                  defaultValue={farmDetails?.avatar}
                  variant="circle"
                />
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Background</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community background photo
            </p>
          </div>
          <div className=" lg:col-span-6 col-span-12 ">
            <FormField
              control={form.control}
              name="cover_photo"
              render={() => (
                <CommunityUpload
                  onChange={value => form.setValue("cover_photo", value)}
                  defaultValue={farmDetails?.cover_photo}
                  variant="rectangle"
                />
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Size</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community land size
            </p>
          </div>
          <Input
            defaultValue={farmDetails?.size}
            {...form.register("size")}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">Location</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community address
            </p>
          </div>
          <Input
            defaultValue={farmDetails?.location}
            {...form.register("location")}
            className=" lg:col-span-6 col-span-12 focus-visible:ring-0 border-2"
          />
        </div>
        <div className="grid grid-cols-12 border-b py-8">
          <div className=" flex flex-col justify-start lg:col-span-5 col-span-12">
            <h6 className=" font-poppins-semibold">District</h6>
            <p className=" text-sm text-gray-500">
              Changes will update community District
            </p>
          </div>
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <SelectDistrict
                field={field}
                defaultValue={farmDetails?.district}
                className="lg:col-span-6 col-span-12 focus-visible:ring-0 border-2"
              />
            )}
          />
        </div>
        <div className="flex py-8">
          <Button disabled={isFarmProfileLoading} className="">
            Update Profile
          </Button>
        </div>
      </form>
      <Loader isVisible={isFarmProfileLoading} />
    </Form>
  );
};

export default CommunityProfileEditForm;
