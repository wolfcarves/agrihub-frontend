import React from "react";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import Dropzone from "../../dropzone/dropzone";
import { Button } from "../../../../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerCommunitySchema } from "./schema";
import { Form, FormField } from "../../../../ui/form";
import Capture from "../../capture/capture";
import SelectId from "../../select-id/select-id";
import toast from "react-hot-toast";
import useFarmApplication from "../../../../../hooks/api/post/useFarmApplication";
import { NewFarmApplication } from "../../../../../api/openapi";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import { useNavigate } from "react-router-dom";
import SelectDistrict from "../../select-district/select-district";

const CommunityRegisterForm = () => {
  const navigate = useNavigate();
  const form = useForm<NewFarmApplication>({
    resolver: zodResolver(registerCommunitySchema),
    mode: "onBlur"
  });

  const { mutateAsync: farmApplyMutate, isLoading: isFarmApplyLoading } =
    useFarmApplication();

  const handleSubmitForm = async (data: NewFarmApplication) => {
    const compiledData: NewFarmApplication = {
      farm_name: data.farm_name,
      farm_size: data.farm_size,
      location: data.location,
      district: data.district,
      id_type: data.id_type,
      valid_id: data.valid_id,
      selfie: data.selfie,
      proof: data.proof,
      farm_actual_images: data.farm_actual_images
    };

    try {
      await farmApplyMutate(compiledData);
      toast.success("Applied Successfully!");
      navigate("/community");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <div className="w-full ">
      <h2 className="font-semibold mb-4">Register Community</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className=" grid grid-cols-12 gap-4"
        >
          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-semibold">Farm Name</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter farm name..."
              {...form.register("farm_name")}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-semibold">Farm Size (&#x33A1;)</Label>
            <Input
              type="number"
              className="h-10"
              placeholder="Enter farm size..."
              {...form.register("farm_size")}
            />
          </div>
          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-semibold">Location</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter Location..."
              {...form.register("location")}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-semibold">District</Label>
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => <SelectDistrict field={field} />}
            />
          </div>

          <div className="col-span-12">
            <Label className=" font-semibold">Select valid ID type</Label>
            <FormField
              control={form.control}
              name="id_type"
              render={({ field }) => <SelectId field={field} />}
            />
          </div>
          <div className="col-span-12">
            <Label className=" font-semibold">Upload ID</Label>
            <FormField
              control={form.control}
              name="valid_id"
              render={() => (
                <Dropzone
                  onChange={value => form.setValue("valid_id", value)}
                />
              )}
            />
          </div>

          <div className="col-span-12">
            <Label className=" font-semibold">
              Capture a photo of yourself
            </Label>
            <FormField
              control={form.control}
              name="selfie"
              render={() => (
                <Capture onChange={value => form.setValue("selfie", value)} />
              )}
            />
          </div>

          <div className="col-span-12">
            <Label className=" font-semibold">Proof of farm ownership</Label>
            <FormField
              control={form.control}
              name="proof"
              render={() => (
                <Dropzone onChange={value => form.setValue("proof", value)} />
              )}
            />
          </div>
          <div className="col-span-12">
            <Label className=" font-semibold">Farm photo</Label>
            <FormField
              control={form.control}
              name="farm_actual_images"
              render={() => (
                <MultiImageUpload
                  onChange={value => form.setValue("farm_actual_images", value)}
                />
              )}
            />
          </div>

          <div className="col-span-12">
            <Button disabled={isFarmApplyLoading} type="submit">
              Apply
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CommunityRegisterForm;
