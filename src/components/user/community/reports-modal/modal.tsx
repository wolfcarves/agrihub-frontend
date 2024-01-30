import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../ui/dialog";
import { Button } from "../../../ui/button";
import { IoMdAdd } from "react-icons/io";
import CommunityAddCropReportForm from "../form/CommunityAddCropReportForm/CommunityAddReportForm";
const CropReportModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="">
        <Button className="flex items-center gap-1">
          <IoMdAdd size={15} /> Report
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crops Report</DialogTitle>
        </DialogHeader>
        <CommunityAddCropReportForm />
      </DialogContent>
    </Dialog>
  );
};

export default CropReportModal;
{
  /* <div className="">
            <Label>Quantity</Label>
            <Input type="text" />
          </div>
          <div className="">
            <Label>Planting Date</Label>
            <Input type="text" />
          </div>
          <div className="">
            <Label>Expected Harvest Date</Label>
            <Input type="text" />
          </div>
          <div className="">
            <Label>Upload Photo</Label>
            <Input type="file" accept="image/*" multiple />
          </div>
          <div className="">
            <Label>Notes</Label>
            <Textarea placeholder="Type your notes here." />
          </div> */
}
