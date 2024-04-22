import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter
} from "../../../ui/custom/dialog/dialog";
import { Button } from "../../../ui/button";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { FarmApplicationData } from "../../../../api/openapi";
import { DialogTrigger } from "../../../ui/dialog";

interface ReviewDialogProps {
  details: FarmApplicationData | undefined;
}

const ApplicationDialog: React.FC<ReviewDialogProps> = ({ details }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button onClick={() => setIsOpen(true)}>Review Application</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <h4 className=" font-poppins-medium leading-none">
          Application Review
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
              value={details?.farm_name}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">Farm Size (&#x33A1;)</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details?.farm_size}
            />
          </div>
          <div className=" md:col-span-4 col-span-12">
            <Label className=" font-poppins-medium">District</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details?.district}
            />
          </div>
          <div className=" md:col-span-8 col-span-12">
            <Label className=" font-poppins-medium">Address</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details?.location}
            />
          </div>

          {/* <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm Ownership</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details?.proof}
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm Type</Label>
            <Input
              type="text"
              className="h-10"
              disabled
              value={details?.type_of_farm}
            />
          </div> */}
          <div className="md:col-span-12 col-span-12 flex flex-col gap-4">
            <div className="">
              <Label className=" font-poppins-medium">ID type</Label>
              <Input
                type="text"
                className="h-10"
                disabled
                value={details?.id_type}
              />
            </div>
            <div className="">
              <Label className=" font-poppins-medium">Upload ID</Label>

              <img className="h-20 " src={details?.valid_id} />
            </div>
          </div>

          <div className="md:col-span-6 col-span-12">
            <Label className=" font-poppins-medium">Farm photo</Label>

            <div className="flex flex-wrap">
              {details?.farm_actual_images?.map((url, index) => (
                <img key={index} src={url} className="h-20" />
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;
