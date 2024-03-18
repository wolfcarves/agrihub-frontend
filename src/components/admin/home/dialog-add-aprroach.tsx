import React, { useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../ui/custom/dialog/dialog";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";
import IconSelector from "../../user/community/Icon-selector/icon-selector";
import { Input } from "../../ui/input";
import { TiEdit } from "react-icons/ti";
import useGetCmsLandingDetails from "../../../hooks/api/get/useGetCmsLandingDetails";
interface dialogProps {
  approachId: string;
}
const DialogAddAprroach: React.FC<dialogProps> = ({ approachId }) => {
  // get present data
  const { data: landingData, isLoading: LearningDataLoading } =
    useGetCmsLandingDetails();

  //get present credits
  const activeApproach = useMemo(() => {
    return landingData?.aproach_items.find(
      approach => approach.id === approachId
    );
  }, [landingData, approachId]);

  console.log(activeApproach, "dasdasd");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TiEdit
          //   onClick={() => setIsOpen(true)}
          size={25}
          className="  border p-1 rounded-full text-green-600 border-green-400/45 bg-green-300/30 hover:animate-pulse"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Approach</DialogTitle>
          <DialogDescription>
            Make changes to approach items here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4 py-4">
          <div className=" col-span-4">
            <Label>Approach</Label>
            <IconSelector />
          </div>
          <div className=" col-span-4">
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Enter approach title here"
              defaultValue={activeApproach.title}
            />
          </div>

          <div className=" col-span-4">
            <Label>Description</Label>
            <Textarea defaultValue={activeApproach.description} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddAprroach;
