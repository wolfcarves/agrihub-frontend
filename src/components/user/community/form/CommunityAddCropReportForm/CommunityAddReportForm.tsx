import React, { useState } from "react";
import { Label } from "../../../../ui/label";
import { Form, FormField } from "../../../../ui/form";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { Textarea } from "../../../../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cropAddReportSchema } from "./schema";
import { NewCommunityCropReport } from "../../../../../api/openapi";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import { toast } from "sonner";
import SelectCrop from "../../select-crop/select-crop";
import useReportCropMutation from "../../../../../hooks/api/post/useReportCropMutation";
import { useNavigate } from "react-router-dom";

const CommunityAddCropReportForm = () => {
  const navigate = useNavigate();
  const form = useForm<NewCommunityCropReport>({
    resolver: zodResolver(cropAddReportSchema),
    mode: "onBlur"
  });

  // useEffect(() => {
  //   if (form.formState.errors.description) {
  //     toast.error(form?.formState?.errors?.description?.message);
  //   }
  //   if (form.formState.errors.image) {
  //     toast.error(form.formState.errors.image.message);
  //   }
  // }, [form.formState.errors]);

  const { mutateAsync: cropReportMutate, isLoading: cropReportLoading } =
    useReportCropMutation();

  const handleSubmitForm = async (data: NewCommunityCropReport) => {
    const compiledData: NewCommunityCropReport = {
      crop_id: data.crop_id,
      planted_qty: data.planted_qty,
      harvested_qty: data.harvested_qty,
      withered_crops: data.withered_crops,
      date_planted: data.date_planted,
      date_harvested: data.date_harvested,
      notes: data.notes,
      image: data.image
    };

    try {
      await cropReportMutate(compiledData);
      toast.success("Report Submitted Successfully!");

      navigate(-1);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-4"
      >
        <div className=" md:col-span-6 col-span-12">
          <Label>Crops Name</Label>
          <FormField
            control={form.control}
            name="crop_id"
            render={({ field }) => <SelectCrop field={field} form={form} />}
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Planted Quantity</Label>
          <Input
            {...form.register("planted_qty")}
            type="number"
            className="h-9 rounded-md"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Harvested Quantity</Label>
          <Input
            {...form.register("harvested_qty")}
            type="number"
            className="h-9 rounded-md"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Withered Crops</Label>
          <Input
            {...form.register("withered_crops")}
            type="number"
            className="h-9 rounded-md"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Planted Date</Label>
          <Input
            {...form.register("date_planted")}
            type="date"
            className="h-9 rounded-md"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Harvested Date</Label>
          <Input
            {...form.register("date_harvested")}
            type="date"
            className="h-9 rounded-md"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Notes</Label>
          <Textarea
            {...form.register("notes")}
            className=" bg-transparent"
            placeholder="Type your notes here."
          />
        </div>
        <div className="md:col-span-12 col-span-12">
          <div className="md:w-[50%] w-full">
            <Label className=" font-poppins-medium">Farm photo</Label>
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <MultiImageUpload
                  onChange={value => form.setValue("image", value)}
                />
              )}
            />
          </div>
        </div>
        <div className="col-span-12">
          <Button disabled={cropReportLoading} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CommunityAddCropReportForm;
