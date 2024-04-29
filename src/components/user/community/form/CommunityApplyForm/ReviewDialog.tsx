import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { UseFormReturn } from "react-hook-form";
import { usePreviewImage } from "../../../../../hooks/utils/usePreviewImage";
import { usePreviewImageArray } from "../../../../../hooks/utils/usePreviewImageArray";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from "../../../../ui/dialog";
import { ApplyCommunitySchema } from "./schema";
import { Button } from "../../../../ui/button";
import { FarmMemberApplication } from "../../../../../api/openapi";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { Textarea } from "../../../../ui/textarea";

interface ReviewDialogProps {
  dialogReview: boolean | undefined;
  setDialogReview: Dispatch<SetStateAction<boolean | undefined>>;
  form: UseFormReturn<any>;
  handleSubmitForm: (data: FarmMemberApplication) => Promise<null | undefined>;
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
  console.log(details);
  const selfie = usePreviewImage(details.proof_selfie);
  const id = usePreviewImage(details.valid_id);

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
            <Label className=" font-poppins-medium">Contact Person</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details.contact_person}
            />
          </div>

          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-poppins-medium">Reason</Label>
            <Textarea disabled value={details.reason} />
          </div>

          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Selfie Proof</Label>

            <img className="h-20 " src={selfie} />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Valid ID</Label>

            <img className="h-20 " src={id} />
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
