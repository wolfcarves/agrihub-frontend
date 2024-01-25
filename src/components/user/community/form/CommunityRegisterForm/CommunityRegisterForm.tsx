import React, { useEffect, useState } from "react";
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
import { toast } from "sonner";
import useFarmApplication from "../../../../../hooks/api/post/useFarmApplication";
import { NewFarmApplication } from "../../../../../api/openapi";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import { useNavigate } from "react-router-dom";
import SelectDistrict from "../../select-district/select-district";
import ActivityIndicator from "@icons/ActivityIndicator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import { ownership } from "../../../../../constants/data";
import DataPrivacyDialog from "./DataPrivacyDialog";
import { Checkbox } from "../../../../ui/checkbox";

const CommunityRegisterForm = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setDialogOpen(true);
  }, []);
  const navigate = useNavigate();
  const form = useForm<NewFarmApplication>({
    resolver: zodResolver(registerCommunitySchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.farm_name) {
      toast.error(form?.formState?.errors?.farm_name?.message);
    }
    if (form.formState.errors.farm_size) {
      toast.error(form.formState.errors.farm_size.message);
    }
    if (form.formState.errors.location) {
      toast.error(form.formState.errors.location.message);
    }
    if (form.formState.errors.district) {
      toast.error(form.formState.errors.district.message);
    }
    if (form.formState.errors.id_type) {
      toast.error(form.formState.errors.id_type.message);
    }
    if (form.formState.errors.valid_id) {
      toast.error(form.formState.errors.valid_id.message);
    }
    if (form.formState.errors.proof) {
      toast.error(form.formState.errors.proof.message);
    }
    if (form.formState.errors.farm_actual_images) {
      toast.error(form.formState.errors.farm_actual_images.message);
    }
  }, [form.formState.errors]);

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
  console.log(form.formState.errors);

  return (
    <div className="w-full ">
      <h2 className="font-poppins-medium mb-4">Register Community</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className=" grid grid-cols-12 gap-4"
        >
          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-poppins-medium">Farm Name</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter farm name..."
              {...form.register("farm_name")}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">Farm Size (&#x33A1;)</Label>
            <Input
              type="number"
              className="h-10"
              placeholder="Enter farm size..."
              {...form.register("farm_size")}
            />
          </div>
          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-poppins-medium">Location</Label>
            <Input
              type="text"
              className="h-10"
              placeholder="Enter Location..."
              {...form.register("location")}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">District</Label>
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => <SelectDistrict field={field} />}
            />
          </div>

          <div className="col-span-12">
            <Label className=" font-poppins-medium">Select valid ID type</Label>
            <FormField
              control={form.control}
              name="id_type"
              render={({ field }) => <SelectId field={field} />}
            />
          </div>
          <div className="col-span-12">
            <Label className=" font-poppins-medium">Upload ID</Label>
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
            <Label className=" font-poppins-medium">Farm Ownership</Label>
            <FormField
              control={form.control}
              name="proof"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select valid id type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {ownership.map((id, i) => (
                      <SelectItem key={i} value={id}>
                        {id}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="col-span-12">
            <Label className=" font-poppins-medium">Farm photo</Label>
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
          <div className="flex items-center space-x-2 col-span-12">
            <Checkbox id="terms" />
            <Label htmlFor="terms">
              Accept{" "}
              <span className="text-primary underline">
                terms and conditions
              </span>
            </Label>
          </div>

          <div className="col-span-12">
            <Button disabled={isFarmApplyLoading} type="submit">
              Apply
            </Button>
          </div>
        </form>
      </Form>
      <ActivityIndicator isVisible={isFarmApplyLoading} />
      <DataPrivacyDialog
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default CommunityRegisterForm;
