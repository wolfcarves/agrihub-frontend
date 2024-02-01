import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger
} from "../../../ui/custom/dialog/dialog";
import { Button } from "../../../ui/button";
import { RegisterCommunitySchema } from "../form/CommunityRegisterForm/schema";
import { UseFormReturn } from "react-hook-form";

interface ReviewDialogProps {
  dialogReview: boolean | undefined;
  setDialogReview: Dispatch<SetStateAction<boolean | undefined>>;
  form: UseFormReturn<RegisterCommunitySchema>;
  handleSubmitForm: (data: RegisterCommunitySchema) => Promise<void>;
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

  return (
    <Dialog open={dialogReview} onOpenChange={setDialogReview}>
      <DialogContent className="sm:max-w-[425px]">
        <div>{details.farm_name}</div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
