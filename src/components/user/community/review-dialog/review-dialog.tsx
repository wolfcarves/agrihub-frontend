import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from "../../../ui/custom/dialog/dialog";
import { Button } from "../../../ui/button";
import { RegisterCommunitySchema } from "../form/CommunityRegisterForm/schema";
import { UseFormReturn } from "react-hook-form";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { usePreviewImage } from "../../../../hooks/utils/usePreviewImage";
import { usePreviewImageArray } from "../../../../hooks/utils/usePreviewImageArray";

interface ReviewDialogProps {
  dialogReview: boolean | undefined;
  setDialogReview: Dispatch<SetStateAction<boolean | undefined>>;
  form: UseFormReturn<RegisterCommunitySchema>;
  handleSubmitForm: (
    data: RegisterCommunitySchema
  ) => Promise<null | undefined>;
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

  const details = form.getValues();
  const previewUrl = usePreviewImage(details.valid_id);
  const previewUrlArray = usePreviewImageArray(details.farm_actual_images);

  return (
    <Dialog open={dialogReview} onOpenChange={setDialogReview}>
      <DialogContent className="sm:max-w-[550px]">
        <h4 className=" font-poppins-medium leading-none">
          Please review the data before submitting
        </h4>
        <p className="leading-none text-xs text-gray-400">
          Data can't be modified when the application is on proccess
        </p>
        <hr className="border-primary" />
        <div className=" overflow-y-auto max-h-[60vh] grid grid-cols-12 gap-2">
          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-poppins-medium">Farm Name</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.farm_name}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">Farm Size (&#x33A1;)</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.farm_size}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">District</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.district}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">Street</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.street}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">Barangay</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.barangay}
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm Ownership</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.proof}
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm Type</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.type_of_farm}
            />
          </div>
          <div className="md:col-span-6 col-span-12 flex flex-col gap-4">
            <div className="">
              <Label className=" font-poppins-medium">
                Select valid ID type
              </Label>
              <Input
                type="text"
                className="h-10"
                disabled
                value={details.id_type}
              />
            </div>
            <div className="">
              <Label className=" font-poppins-medium">Upload ID</Label>

              <img className="h-20 w-20" src={previewUrl} />
            </div>
          </div>

          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm photo</Label>

            <div className="flex flex-wrap">
              {previewUrlArray?.map((url, index) => (
                <img key={index} src={url} className="h-20 w-20" />
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setDialogReview(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
