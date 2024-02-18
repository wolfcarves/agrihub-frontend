import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/custom/dialog/dialog";
import { Button } from "../../../../ui/button";
import { IoMdAdd } from "react-icons/io";
import AddLearningResourceForm from "../../form/learning-resource-form/add-learning-resource-form";

interface DialogProps {
  resourceId?: string;
}

const DialogEditResource: React.FC<DialogProps> = ({ resourceId }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          variant={"outline"}
          onClick={() => setIsOpen(true)}
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Resource</DialogTitle>
          <DialogDescription>
            Fill out the form to add resource. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <AddLearningResourceForm
          setIsOpen={setIsOpen}
          resourceId={resourceId}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditResource;
