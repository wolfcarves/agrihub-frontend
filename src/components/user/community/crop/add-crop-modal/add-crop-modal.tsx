import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../../ui/custom/dialog/dialog";
import { Button } from "../../../../ui/button";
import { PiPottedPlant } from "react-icons/pi";
import CommunityAddCropForm from "../../form/CommunityAddCrop/CommunityAddCropForm";

const AddCropModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <PiPottedPlant size={16} className="mr-1" /> Add Crop
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Community Crop</DialogTitle>
          <DialogDescription>
            Select crop you want to add. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <CommunityAddCropForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddCropModal;
