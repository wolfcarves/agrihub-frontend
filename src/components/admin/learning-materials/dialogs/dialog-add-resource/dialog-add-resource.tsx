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
import AddLearningResourceForm from "../../form/learning-resource-form/add-learning-resource-form";

const DialogAddResource = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="gap-1 text-primary border-primary hover:text-white hover:bg-primary"
          variant={"outline"}
          onClick={() => setIsOpen(true)}
        >
          <IoMdAdd size={16} /> Add Resource
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Resource</DialogTitle>
          <DialogDescription>
            Fill out the form to add resource. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <AddLearningResourceForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddResource;
