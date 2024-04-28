import React, { useEffect, useMemo, useState } from "react";
import { Label } from "../../../../ui/label";
import { Form, FormField, FormMessage } from "../../../../ui/form";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { Textarea } from "../../../../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewCommunityCropReport } from "../../../../../api/openapi";
import MultiImageUpload from "../../multi-image-input/multi-image-input";
import { toast } from "sonner";
import SelectCrop from "../../select-crop/select-crop";
import useReportCropMutation from "../../../../../hooks/api/post/useReportCropMutation";
import { useNavigate, useParams } from "react-router-dom";
import { Checkbox } from "../../../../ui/checkbox";
import { addWeeks, format, isBefore } from "date-fns";
import Loader from "../../../../../icons/Loader";
import { concatPresentTime, removeTimeFromDate } from "../../../../lib/utils";
import useGetReportCropListView from "../../../../../hooks/api/get/useGetReportCropListView";
import InputNumber from "../../../../ui/custom/input/input-number";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import ReviewDialog from "./ReviewDialog";
import { cropAddReportSchema } from "./schema";

const CommunityAddCropReportForm = () => {
  const [dialogReview, setDialogReview] = useState<boolean>();
  const navigate = useNavigate();
  const { id, cropId } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  const { data: CropReport, isLoading } = useGetReportCropListView(
    cropId || ""
  );

  // const existingCropData = useSelector(state => state.existingCrop);
  // console.log(existingCropData);
  // const [check, setCheck] = useState<CheckedState>(false);

  const [isCrop, setIsCrop] = useState<boolean>(true);
  const [isYield, setIsYield] = useState<boolean>(true);
  const form = useForm<NewCommunityCropReport>({
    resolver: zodResolver(
      cropAddReportSchema(cropId || "", CropReport || {}, farmCrops || [])
    ),
    mode: "onBlur",
    defaultValues: {
      isyield: true
    }
  });

  useEffect(() => {
    if (form.watch("crop_id") === "") {
      setIsCrop(false);
    } else {
      setIsCrop(true);
    }
  }, [form.watch("crop_id")]);

  const targetCrop = useMemo(() => {
    const selectedId = form.watch("crop_id");
    return farmCrops?.find(obj => obj.id === selectedId);
  }, [farmCrops, form.watch("crop_id")]);

  // useEffect(() => {
  //   // if (isYield === false) {
  //   //   const witheredVal =
  //   //     Number(form.watch("planted_qty") || 0) -
  //   //     Number(form.watch("harvested_qty") || 0);
  //   //   form.setValue("withered_crops", witheredVal || undefined);
  //   // }
  //   if (targetCrop?.isyield) {
  //     if (
  //       Number(form.watch("planted_qty") || "0") <
  //       Number(form.watch("withered_crops") || "0")
  //     ) {
  //       form.setError("withered_crops", {
  //         type: "manual",
  //         message: "Withered plants can't be higher than planted quantity"
  //       });
  //     }
  //   }
  //   if (!targetCrop?.isyield) {
  //     const Combined =
  //       Number(form.watch("withered_crops") || "0") +
  //       Number(form.watch("date_harvested") || "0");
  //     if (Number(form.watch("planted_qty") || "0") < 10) {
  //       form.setError("date_harvested", {
  //         type: "manual",
  //         message:
  //           "Withered plants and harvested crops combined value can't be higher than planted quantity"
  //       });
  //     }
  //   }
  // }, [targetCrop, form.watch("withered_crops"), form.watch("harvested_qty")]);

  useEffect(() => {
    if (form.watch("isyield") === true) {
      setIsYield(true);
    }
    if (form.watch("isyield") === false) {
      setIsYield(false);
    }
  }, [form.watch("isyield")]);

  useEffect(() => {
    if (isYield === false) {
      const witheredVal =
        Number(form.watch("planted_qty") || 0) -
        Number(form.watch("harvested_qty") || 0);
      form.setValue("withered_crops", witheredVal || undefined);
    }
  }, [form.watch("planted_qty"), form.watch("harvested_qty"), isYield]);

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

  const handleValidations = async () => {
    const success = await form.trigger();
    if (success) {
      return setDialogReview(true);
    }
  };

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

    // if (!check) {
    //   form.setError("notes", {
    //     type: "manual",
    //     message:
    //       "Oops! It looks like you forgot to agree to the terms and conditions."
    //   });
    //   return null;
    // }

    const compiledData: NewCommunityCropReport = {
      crop_id: data.crop_id,
      c_name: data.c_name,
      is_other: !isCrop ? true : undefined,
      isyield: data.isyield,
      planted_qty: data.planted_qty || 0,
      harvested_qty: data.harvested_qty,
      withered_crops: data.withered_crops,
      kilogram: data.kilogram,
      date_planted: cropId
        ? CropReport?.date_planted
        : concatPresentTime(data.date_planted || ""),
      date_harvested: concatPresentTime(data.date_harvested || ""),
      notes: data.notes,
      image: data.image,
      is_first_report: cropId ? "" : "true",
      report_id: cropId
    };
    if (!cropId) {
      delete compiledData.report_id;
    }
    try {
      await cropReportMutate(compiledData);
      toast.success("Report Submitted Successfully!");
      navigate(-1);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };
  console.log(form.formState.errors);

  const todayDate = format(new Date(), "yyyy-MM-dd");

  if (isLoading) {
    return <Loader isVisible={true} />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
        className="grid grid-cols-12 gap-4 mb-4"
      >
        <div className=" md:col-span-6 col-span-12">
          <Label>Crops Name</Label>
          <FormField
            control={form.control}
            name="crop_id"
            render={({ field }) => (
              <SelectCrop
                other={true}
                field={field}
                form={form}
                setIsYield={setIsYield}
                defaultValue={CropReport?.cfc_id}
                disabled={cropId ? true : false}
              />
            )}
          />
        </div>
        {!cropId ? (
          <div className="md:col-span-6 col-span-12">
            <Label>Planted Quantity</Label>
            <FormField
              control={form.control}
              name="planted_qty"
              render={() => (
                <InputNumber
                  className="h-9 rounded-md"
                  suffix={" pieces"}
                  onChange={value =>
                    form.setValue("planted_qty", Number(value))
                  }
                />
              )}
            />
            <FormMessage>
              {form.formState.errors.planted_qty?.message}
            </FormMessage>
          </div>
        ) : (
          <div className="md:col-span-6 col-span-12">
            <Label>Planted Quantity</Label>
            <Input
              type="text"
              value={`${CropReport?.planted_qty} pieces`}
              disabled
              className="h-9 rounded-md"
            />
          </div>
        )}
        {!isCrop && (
          <>
            <div className="flex items-center space-x-2 md:col-span-6 col-span-12 pl-2">
              <FormField
                control={form.control}
                name="isyield"
                render={({ field }) => (
                  <>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label>
                      <span className=" font-poppins-medium">Productive</span>{" "}
                      (The capacity of a crop to be harvested in quantity)
                    </Label>
                  </>
                )}
              />
            </div>
            <div className="md:col-span-6 col-span-12">
              <Label>Crop Name</Label>
              <Input
                {...form.register("c_name")}
                type="text"
                className="h-9 rounded-md"
                required={!isCrop}
              />
            </div>
          </>
        )}

        <div className="md:col-span-6 col-span-12">
          <Label>Harvested Quantity</Label>
          <FormField
            control={form.control}
            name="harvested_qty"
            render={() => (
              <InputNumber
                className="h-9 rounded-md"
                suffix={" pieces"}
                onChange={value =>
                  form.setValue("harvested_qty", Number(value))
                }
              />
            )}
          />
          <FormMessage>
            {form.formState.errors.harvested_qty?.message}
          </FormMessage>
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Withered Plant</Label>
          <FormField
            control={form.control}
            name="withered_crops"
            render={() => (
              <InputNumber
                className="h-9 rounded-md"
                suffix={" pieces"}
                onChange={value =>
                  form.setValue("withered_crops", Number(value))
                }
              />
            )}
          />

          <FormMessage>
            {form.formState.errors.withered_crops?.message}
          </FormMessage>
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Harvested Kilogram</Label>

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
          <FormMessage>{form.formState.errors.kilogram?.message}</FormMessage>
        </div>

        <div className="md:col-span-6 col-span-12">
          <Label>Planted Date</Label>
          <Input
            {...form.register("date_planted")}
            type="date"
            defaultValue={removeTimeFromDate(CropReport?.date_planted || "")}
            className="h-9 rounded-md "
            max={todayDate}
            disabled={cropId ? true : false}
          />
          <FormMessage>
            {form.formState.errors.date_planted?.message}
          </FormMessage>
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
            plantedDate={CropReport?.date_planted}
            plantedQty={CropReport?.planted_qty}
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

export default CommunityAddCropReportForm;
