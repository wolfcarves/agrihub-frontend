import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from "react";

import { UseFormReturn } from "react-hook-form";

import { usePreviewImage } from "@hooks/utils/usePreviewImage";
import { usePreviewImageArray } from "@hooks/utils/usePreviewImageArray";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from "../../../../ui/dialog";
import { Button } from "../../../../ui/button";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import SelectCrop from "../../select-crop/select-crop";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import { useParams } from "react-router-dom";
import useGetReportCropListView from "../../../../../hooks/api/get/useGetReportCropListView";
import { removeTimeFromDate } from "../../../../lib/utils";
import { PlantedCropReportFormData } from "../../../../../api/openapi";
import { format } from "date-fns";

interface ReviewDialogProps {
  dialogReview: boolean | undefined;
  setDialogReview: Dispatch<SetStateAction<boolean | undefined>>;
  form: UseFormReturn<any>;
  handleSubmitForm: (data: PlantedCropReportFormData) => Promise<void>;
}

const ReviewDialog: React.FC<ReviewDialogProps> = ({
  dialogReview,
  setDialogReview,
  form,
  handleSubmitForm
}) => {
  const handleSubmit = () => {
    form.handleSubmit(handleSubmitForm)();
    setDialogReview(false);
  };
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  const details = form.getValues();

  const targetCrop = useMemo(() => {
    return farmCrops?.find(obj => obj.id === details.crop_id);
  }, [farmCrops, form.watch("crop_id")]);

  const previewUrlArray = usePreviewImageArray(details.images);

  return (
    <Dialog open={dialogReview} onOpenChange={setDialogReview}>
      <DialogContent className="sm:max-w-[550px]">
        <h4 className=" font-poppins-medium leading-none">
          Please review planting report before submitting
        </h4>
        <p className="leading-none text-xs text-gray-400">
          Data can't be modified when report submitted
        </p>
        <hr className="border-primary" />
        <div className=" overflow-y-auto max-h-[60vh] grid grid-cols-12 gap-2">
          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-poppins-medium">Crop Name</Label>
            <Input
              type="text"
              className="h-10  disabled:opacity-90"
              disabled
              value={targetCrop?.name}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">Planted Quantity</Label>
            <Input
              type="text"
              className="h-10  disabled:opacity-90"
              disabled
              value={details.planted_qty}
            />
          </div>

          <div className="md:col-span-12 col-span-12">
            <Label className=" font-poppins-medium">Planted Date</Label>
            <Input
              type="text"
              className="h-10 disabled:opacity-90"
              disabled
              value={
                details.date_planted &&
                format(new Date(details.date_planted || ""), "PPP")
              }
            />
          </div>

          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Planting Images</Label>

            <div className="flex flex-wrap">
              {previewUrlArray?.map((url, index) => (
                <img key={index} src={url} className="h-20" />
              ))}
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-row gap-2 justify-end">
          <Button variant="secondary" onClick={() => setDialogReview(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
