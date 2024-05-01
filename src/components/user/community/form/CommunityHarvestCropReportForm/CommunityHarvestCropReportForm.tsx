import React, { useEffect, useState } from "react";
import { Label } from "../../../../ui/label";
import { Form, FormField, FormMessage } from "../../../../ui/form";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HarvestedCropReportFormData,
  PlantedCropReportFormData
} from "../../../../../api/openapi";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { Checkbox } from "../../../../ui/checkbox";
import { format } from "date-fns";
import ReviewDialog from "./ReviewDialog";
import useCommunityFarmReportPlanted from "../../../../../hooks/api/post/useCommunityFarmReportPlanted";
import SelectCrop from "./select-crop";
import InputNumber from "../../../../ui/custom/input/input-number";
import Loader from "../../../../../icons/Loader";

import useCommunityFarmReportHarvest from "../../../../../hooks/api/post/useCommunityFarmReportHarvest";
import { cropHarvestReportSchema } from "./schema";
import { Textarea } from "../../../../ui/textarea";
import useGetReportCropListView from "../../../../../hooks/api/get/useGetReportCropListView";
import { removeTimeFromDate } from "../../../../lib/utils";

const CommunityHarvestCropReportForm = () => {
  const [dialogReview, setDialogReview] = useState<boolean>();
  const navigate = useNavigate();
  const { reportId, task } = useParams();
  // const [check, setCheck] = useState<CheckedState>(false);
  const { data: CropReport, isLoading } = useGetReportCropListView(
    reportId || ""
  );
  console.log(CropReport, "asdsad");

  const form = useForm<HarvestedCropReportFormData>({
    resolver: zodResolver(cropHarvestReportSchema),
    mode: "onBlur"
  });

  // useEffect(() => {
  //   if (form.formState.errors.images) {
  //     toast.error(form.formState.errors.images.message);
  //   }
  //   if (form.formState.errors.crop_id) {
  //     toast.error(form.formState.errors.crop_id.message);
  //   }
  // }, [form.formState.errors]);

  const { mutateAsync: cropReportMutate, isLoading: cropReportLoading } =
    useCommunityFarmReportHarvest();

  const handleValidations = async () => {
    const success = await form.trigger();
    if (success) {
      return setDialogReview(true);
    }
  };

  const handleSubmitForm = async (data: HarvestedCropReportFormData) => {
    try {
      const compiledData: HarvestedCropReportFormData = {
        harvested_qty: "0",
        withered_crops: data.withered_crops,
        date_harvested: data.date_harvested,
        kilogram: data.kilogram,
        notes: data.notes,
        task_id: task ? task : undefined,
        images: data.images
      };
      await cropReportMutate({
        id: reportId || "",
        formData: compiledData
      });
      toast.success("Report Planted Submitted Successfully!");
      navigate(-1);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };
  console.log(form.formState.errors);

  if (isLoading) {
    return <Loader isVisible={true} />;
  }

  const todayDate = format(new Date(), "yyyy-MM-dd");

  const addMonth = (date: string, month: string) => {
    const dateConvert = new Date(date);
    const dateAdded = new Date(
      dateConvert.setMonth(dateConvert.getMonth() + Number(month))
    );
    const finalDate = format(new Date(dateAdded || ""), "yyyy-MM-dd");
    return finalDate;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-4 mb-4"
      >
        <div className="md:col-span-6 col-span-12">
          <Label>Crop Name</Label>
          <Input
            className="h-9 rounded-md disabled:opacity-90"
            disabled
            value={CropReport?.crop_name}
          />
        </div>
        {/* <div className="md:col-span-6 col-span-12">
          <Label>Harvest Quantity</Label>
          <FormField
            control={form.control}
            name="harvested_qty"
            render={() => (
              <InputNumber
                className="h-9 rounded-md"
                suffix={" pieces"}
                onChange={value => form.setValue("harvested_qty", value)}
              />
            )}
          />
          <FormMessage>
            {form.formState.errors.harvested_qty?.message}
          </FormMessage>
        </div> */}
        <div className="md:col-span-6 col-span-12">
          <Label>Planted Quantity</Label>
          <Input
            className="h-9 disabled:opacity-90"
            disabled
            value={
              CropReport?.planted_qty === "0"
                ? CropReport.previous_planted_qty
                : CropReport?.planted_qty
            }
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Harvest Kilogram</Label>
          <FormField
            control={form.control}
            name="kilogram"
            render={() => (
              <InputNumber
                className="h-9 rounded-md"
                suffix={" kilogram"}
                onChange={value => form.setValue("kilogram", value)}
              />
            )}
          />
          <FormMessage>
            {form.formState.errors.withered_crops?.message}
          </FormMessage>
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Withered Plants</Label>
          <FormField
            control={form.control}
            name="withered_crops"
            render={() => (
              <InputNumber
                className="h-9 rounded-md"
                suffix={" pieces"}
                decimalScale={0}
                onChange={value => form.setValue("withered_crops", value)}
              />
            )}
          />
          <FormMessage>
            {form.formState.errors.withered_crops?.message}
          </FormMessage>
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Planted Date</Label>
          <Input
            className="h-9 rounded-md disabled:opacity-90"
            disabled
            value={
              CropReport?.date_planted &&
              format(new Date(CropReport?.date_planted || ""), "dd/MM/yyyy")
            }
          />
        </div>
        {CropReport?.batch && (
          <div className="md:col-span-6 col-span-12">
            <Label>Last Harvest Date</Label>
            <Input
              className="h-9 rounded-md disabled:opacity-90"
              disabled
              value={format(new Date(CropReport?.batch || ""), "dd/MM/yyyy")}
            />
          </div>
        )}

        <div className="md:col-span-6 col-span-12">
          <Label>Harvest Date</Label>
          <Input
            {...form.register("date_harvested")}
            type="date"
            className="h-9 rounded-md "
            max={todayDate}
            min={addMonth(
              CropReport?.batch || CropReport?.date_planted || "",
              CropReport?.growth_span || ""
            )}
          />
          <FormMessage>
            {form.formState.errors.date_harvested?.message}
          </FormMessage>
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Note</Label>
          <Textarea className=" bg-transparent" {...form.register("notes")} />
          <FormMessage>{form.formState.errors.notes?.message}</FormMessage>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div className="md:w-[100%] w-full">
            <Label className=" font-poppins-medium">Proof of Harvest</Label>
            <FormField
              control={form.control}
              name="images"
              render={() => (
                <MultiImageUpload
                  onChange={value => {
                    form.setValue("images", value);
                    console.log(value);
                  }}
                />
              )}
            />
          </div>
        </div>
        {/* <div className="flex items-center space-x-2 col-span-12">
          <Checkbox
            checked={check}
            onCheckedChange={checked => setCheck(checked)}
          />
          <Label htmlFor="terms">
            By selecting this, you agree to our&nbsp;
            <span className="text-primary underline">terms and conditions</span>
          </Label>
        </div> */}
        <div className="col-span-12">
          <Button
            disabled={cropReportLoading}
            type="button"
            onClick={handleValidations}
          >
            Submit
          </Button>
          <ReviewDialog
            dialogReview={dialogReview}
            setDialogReview={setDialogReview}
            form={form}
            handleSubmitForm={handleSubmitForm}
          />
        </div>
      </form>
      <Loader isVisible={cropReportLoading} />
    </Form>
  );
};

export default CommunityHarvestCropReportForm;
