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
}

const ReviewDialog: React.FC<ReviewDialogProps> = ({
  dialogReview,
  setDialogReview,
  form
}) => {
  const handleSubmit = () => {
    setDialogReview(false);
    form.trigger();
  };
  return (
    <Dialog open={dialogReview}>
      <DialogTrigger asChild>
        <Button type="submit">Apply</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div>asdasdas</div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
