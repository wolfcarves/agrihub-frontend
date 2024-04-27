import React, { useEffect, useRef, useState } from "react";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import Dropzone from "../../dropzone/dropzone";
import { Button } from "../../../../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterCommunitySchema, registerCommunitySchema } from "./schema";
import { Form, FormField, FormMessage } from "../../../../ui/form";
import SelectId from "../../select-id/select-id";
import { toast } from "sonner";
import useFarmApplication from "../../../../../hooks/api/post/useFarmApplication";
import { NewFarmApplication } from "../../../../../api/openapi";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import { useNavigate, useParams } from "react-router-dom";
import SelectDistrict from "../../select-district/select-district";
import ActivityIndicator from "@icons/ActivityIndicator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import { farmType, ownership } from "../../../../../constants/data";
import { Checkbox } from "../../../../ui/checkbox";
import DataPrivacyDialog from "../../../../ui/custom/data-privacy-dialog/data-privacy-dialog";
import SelectBarangay from "../../select-barangay/select-barangay";
import ReviewDialog from "../../review-dialog/review-dialog";
import { CheckedState } from "@radix-ui/react-checkbox";
import Capture from "../../capture/capture";
import InputNumber from "../../../../ui/custom/input/input-number";
import useGetFarmViewQuery from "../../../../../hooks/api/get/useGetFarmViewQuery";

const CommunityApplyForm = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogReview, setDialogReview] = useState<boolean>();
  const [district, setDistrict] = useState<string>("");
  const [check, setCheck] = useState<CheckedState>(false);
  const [isOther, setIsOther] = useState<boolean>(false);
  const [otherId, setOtherId] = useState<string>("");
  const { id } = useParams();
  const { data: farmDetails, isLoading } = useGetFarmViewQuery(id || "");

  // useEffect(() => {
  //   setDialogOpen(true);
  // }, []);

  const navigate = useNavigate();
  const form = useForm<RegisterCommunitySchema>({
    resolver: zodResolver(registerCommunitySchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.watch("id_type") === "Others") {
      setIsOther(true);
    } else {
      setIsOther(false);
    }
  }, [form.watch("id_type")]);
  console.log(form.watch("id_type"));

  useEffect(() => {
    if (form.formState.errors.valid_id) {
      toast.error(form.formState.errors.valid_id.message?.toString());
    }
    if (form.formState.errors.farm_actual_images) {
      toast.error(form.formState.errors.farm_actual_images.message?.toString());
    }
    if (form.formState.errors.root) {
      toast.error(form.formState.errors.root.message?.toString());
    }
  }, [form.formState.errors]);

  const { mutateAsync: farmApplyMutate, isLoading: isFarmApplyLoading } =
    useFarmApplication();

  const handleValidation = async () => {
    // console.log("no open");
    const success = await form.trigger();
    if (success) {
      return setDialogReview(true);
    }
  };
  const handleSubmitForm = async (data: RegisterCommunitySchema) => {
    if (!check) {
      form.setError("root", {
        type: "manual",
        message:
          "Oops! It looks like you forgot to agree to the terms and conditions."
      });
      return null;
    }
    // setDialogReview(true);
    const compiledData: NewFarmApplication = {
      farm_name: data.farm_name,
      farm_size: String(data.farm_size),
      location: `${data.street} ${data.barangay}`,
      district: data.district,
      id_type: isOther ? otherId : data.id_type,
      valid_id: data.valid_id,
      proof: data.proof,
      type_of_farm: data.type_of_farm,
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
    <div className="w-full md:px-0 px-2 my-4">
      <div className="">
        <h2 className="font-poppins-medium">
          Apply to {farmDetails?.farm_name}
        </h2>
        <div></div>
      </div>
      <hr className="mb-4 mt-1 border-primary border-2" />
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
              className="h-10 bg-transparent"
              placeholder="Enter farm name..."
              {...form.register("farm_name")}
            />
            <FormMessage>
              {form.formState.errors.farm_name?.message}
            </FormMessage>
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">Farm Size (&#x33A1;)</Label>
            {/* <Input
              type="number"
              className="h-10 bg-transparent"
              placeholder="Enter farm size..."
              min={0}
              max={10000}
              {...form.register("farm_size")}
            /> */}
            <FormField
              control={form.control}
              name="farm_size"
              render={() => (
                <InputNumber
                  className="h-10 bg-transparent rounded-md"
                  suffix={" sqm"}
                  placeholder="Enter farm size..."
                  onChange={value => form.setValue("farm_size", Number(value))}
                />
              )}
            />
            <FormMessage>
              {form.formState.errors.farm_size?.message}
            </FormMessage>
          </div>
          <div className=" md:col-span-3 col-span-12">
            <Label className=" font-poppins-medium">District</Label>
            <FormField
              control={form.control}
              name="district"
              render={({ field, fieldState }) => (
                <>
                  <SelectDistrict field={field} setDistrict={setDistrict} />
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </>
              )}
            />
          </div>
          <div className=" md:col-span-3 col-span-12">
            <Label className=" font-poppins-medium">Barangay</Label>
            <FormField
              control={form.control}
              name="barangay"
              render={({ field, fieldState }) => (
                <>
                  <SelectBarangay field={field} district={district} />
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </>
              )}
            />
          </div>
          <div className=" md:col-span-3 col-span-12">
            <Label className=" font-poppins-medium">Street</Label>
            <Input
              type="text"
              className="h-10 bg-transparent"
              placeholder="Enter Location..."
              {...form.register("street")}
            />
            <FormMessage>{form.formState.errors.street?.message}</FormMessage>
          </div>
          <div className=" md:col-span-3 col-span-12">
            <Label className=" font-poppins-medium">City & Country</Label>
            <Input
              type="text"
              className="h-10 bg-transparent disabled:opacity-90"
              value={"Quezon City, Phillipines"}
              placeholder="Enter Location..."
              disabled
            />
            <p className=" text-[.6rem] text-gray-400 ms-2">
              Farm application only accept inside of Quezon City.
            </p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm Ownership</Label>
            <FormField
              control={form.control}
              name="proof"
              render={({ field, fieldState }) => (
                <>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select ownership type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {ownership.map((id, i) => (
                        <SelectItem key={i} value={id.title}>
                          {id.title}
                          <p className=" text-[.6rem] text-gray-500 overflow-hidden text-wrap">
                            {id.description}
                          </p>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </>
              )}
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm Type</Label>
            <FormField
              control={form.control}
              name="type_of_farm"
              render={({ field, fieldState }) => (
                <>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select farm type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {farmType.map((id, i) => (
                        <SelectItem key={i} value={id.title} className="">
                          {id.title}
                          <p className=" text-[.6rem] text-gray-500 overflow-hidden text-wrap">
                            {id.description}
                          </p>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </>
              )}
            />
          </div>
          <div className="md:col-span-6 col-span-12 flex flex-col gap-4">
            <div className="">
              <Label className=" font-poppins-medium">
                Select valid ID type
              </Label>
              <FormField
                control={form.control}
                name="id_type"
                render={({ field, fieldState }) => (
                  <>
                    <SelectId field={field} />
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </>
                )}
              />
            </div>
            {isOther && (
              <div className="">
                <Label className=" font-poppins-medium">Other ID Type</Label>
                <Input
                  type="text"
                  className="h-10 bg-transparent capitalize"
                  placeholder="Enter ID Type..."
                  value={otherId}
                  onChange={e => setOtherId(e.target.value)}
                />
              </div>
            )}
            <div className="">
              <Label className=" font-poppins-medium">Upload ID</Label>
              <FormField
                control={form.control}
                name="valid_id"
                render={() => (
                  <Capture
                    onChange={value => form.setValue("valid_id", value)}
                  />
                )}
              />
            </div>
          </div>

          <div className="md:col-span-6 col-span-12">
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
            <Checkbox
              checked={check}
              onCheckedChange={checked => setCheck(checked)}
            />
            <Label>
              Accept{" "}
              <span
                onClick={() => setDialogOpen(true)}
                className="text-primary underline"
              >
                terms and conditions
              </span>
            </Label>
          </div>

          <div className="col-span-12">
            {/* <Button disabled={isFarmApplyLoading} type="submit">
              Apply
            </Button> */}
            <Button type="button" onClick={handleValidation}>
              Apply
            </Button>
            <ReviewDialog
              dialogReview={dialogReview}
              setDialogReview={setDialogReview}
              form={form}
              handleSubmitForm={handleSubmitForm}
            />
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

export default CommunityApplyForm;
