import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/custom/dialog/dialog";
import { Button } from "../../../../ui/button";
import { IoMdAdd } from "react-icons/io";
import LearningCreditForm from "../../form/learning-credit-form/learning-credit-form";
const DialogAddCredits = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="gap-1 text-primary border-primary hover:text-white hover:bg-primary"
          variant={"outline"}
          onClick={() => setIsOpen(true)}
        >
          <IoMdAdd size={16} /> Add Source
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Credits</DialogTitle>
          <DialogDescription>
            Fill out the form to add credits. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <LearningCreditForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddCredits;
