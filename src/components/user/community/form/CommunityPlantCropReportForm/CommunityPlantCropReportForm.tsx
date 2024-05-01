import React, { useEffect, useState } from "react";
import { Label } from "../../../../ui/label";
import { Form, FormField, FormMessage } from "../../../../ui/form";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PlantedCropReportFormData } from "../../../../../api/openapi";
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
import { cropPlantReportSchema } from "./schema";

const CommunityPlantCropReportForm = () => {
  const [dialogReview, setDialogReview] = useState<boolean>();
  const navigate = useNavigate();
  const { id, cropId, task } = useParams();
  // const [check, setCheck] = useState<CheckedState>(false);

  const form = useForm<PlantedCropReportFormData>({
    resolver: zodResolver(cropPlantReportSchema),
    mode: "onBlur"
  });

  useEffect(() => {
    if (form.formState.errors.images) {
      toast.error(form.formState.errors.images.message);
    }
    if (form.formState.errors.crop_id) {
      toast.error(form.formState.errors.crop_id.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: cropReportMutate, isLoading: cropReportLoading } =
    useCommunityFarmReportPlanted();

  const handleValidations = async () => {
    const success = await form.trigger();
    if (success) {
      return setDialogReview(true);
    }
  };

  const handleSubmitForm = async (data: PlantedCropReportFormData) => {
    try {
      const compiledData: PlantedCropReportFormData = {
        crop_id: data.crop_id,
        planted_qty: data.planted_qty,
        date_planted: data.date_planted,
        task_id: task ? task : undefined,
        images: data.images
      };
      await cropReportMutate({
        id: id || "",
        formData: compiledData
      });
      toast.success("Report Planted Submitted Successfully!");
      navigate(-1);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };
  console.log(form.formState.errors);

  const todayDate = format(new Date(), "yyyy-MM-dd");

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
                other={false}
                defaultValue={cropId || ""}
                disabled={cropId ? true : false}
                field={field}
                form={form}
              />
            )}
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <Label>Planted Quantity</Label>
          <FormField
            control={form.control}
            name="planted_qty"
            render={() => (
              <InputNumber
                className="h-9 rounded-md"
                suffix={" pieces"}
                decimalScale={0}
                onChange={value => form.setValue("planted_qty", value)}
              />
            )}
          />
          <FormMessage>
            {form.formState.errors.planted_qty?.message}
          </FormMessage>
        </div>

        <div className="md:col-span-6 col-span-12">
          <Label>Planted Date</Label>
          <Input
            {...form.register("date_planted")}
            type="date"
            className="h-9 rounded-md "
            max={todayDate}
          />
          <FormMessage>
            {form.formState.errors.date_planted?.message}
          </FormMessage>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div className="md:w-[80%] w-full">
            <Label className=" font-poppins-medium">Proof of Planting</Label>
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

export default CommunityPlantCropReportForm;
