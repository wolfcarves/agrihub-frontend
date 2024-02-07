import React, { useEffect, useState } from "react";
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
import { Checkbox } from "../../../../ui/checkbox";
import { addWeeks, format, isBefore } from "date-fns";
import { CheckedState } from "@radix-ui/react-checkbox";

const CommunityAddCropReportForm = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState<CheckedState>(false);

  const form = useForm<NewCommunityCropReport>({
    resolver: zodResolver(cropAddReportSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.crop_id) {
      toast.error(form?.formState?.errors?.crop_id?.message);
    }
    if (form.formState.errors.date_harvested) {
      toast.error(form?.formState?.errors?.date_harvested?.message);
    }
    if (form.formState.errors.date_planted) {
      toast.error(form?.formState?.errors?.date_planted?.message);
    }
    if (form.formState.errors.harvested_qty) {
      toast.error(form?.formState?.errors?.harvested_qty?.message);
    }
    if (form.formState.errors.image) {
      toast.error(form.formState.errors.image.message);
    }
    if (form.formState.errors.notes) {
      toast.error(form?.formState?.errors?.notes?.message);
    }
    if (form.formState.errors.planted_qty) {
      toast.error(form?.formState?.errors?.planted_qty?.message);
    }
    if (form.formState.errors.withered_crops) {
      toast.error(form?.formState?.errors?.withered_crops?.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: cropReportMutate, isLoading: cropReportLoading } =
    useReportCropMutation();

  const handleSubmitForm = async (data: NewCommunityCropReport) => {
    const { date_planted, date_harvested } = data;
    const plantedDate = date_planted ? new Date(date_planted) : null;
    const harvestedDate = date_harvested ? new Date(date_harvested) : null;
    const minHarvestDate = plantedDate ? addWeeks(plantedDate, 1) : null;

    if (
      minHarvestDate &&
      harvestedDate &&
      isBefore(harvestedDate, minHarvestDate)
    ) {
      form.setError("date_planted", {
        type: "manual",
        message: "Harvest date must be at least 1 week after planted date"
      });
      return null;
    }

    if (!check) {
      form.setError("notes", {
        type: "manual",
        message:
          "Oops! It looks like you forgot to agree to the terms and conditions."
      });
      return null;
    }

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
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

  const todayDate = format(new Date(), "yyyy-MM-dd");

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
            max={todayDate}
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Harvested Date</Label>
          <Input
            {...form.register("date_harvested")}
            type="date"
            className="h-9 rounded-md"
            max={todayDate}
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
        <div className="flex items-center space-x-2 col-span-12">
          <Checkbox
            checked={check}
            onCheckedChange={checked => setCheck(checked)}
          />
          <Label htmlFor="terms">
            By selecting this, you agree to our&nbsp;
            <span className="text-primary underline">terms and conditions</span>
          </Label>
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
