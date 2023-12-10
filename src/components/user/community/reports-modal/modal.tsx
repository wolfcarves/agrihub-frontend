import React from "react";
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
import { Form } from "../../../ui/form";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";

const CropReportModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary p-2 rounded-md text-white">
        Open
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crops Report</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4">
          <div className="">
            <Label>Crops Name</Label>
            <Input type="text" />
          </div>
          <div className="">
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
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit" variant="default">
              Report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CropReportModal;
