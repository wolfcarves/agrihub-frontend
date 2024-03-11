import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../../ui/custom/dialog/dialog";
import { Button } from "../../../../ui/button";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import { BiImageAdd } from "react-icons/bi";
import CommunityAddImageForm from "../../form/CommunityAddImageForm/CommunityAddImageForm";

const AddImageModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <BiImageAdd size={16} className="mr-1" /> Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Image Gallery</DialogTitle>
          <DialogDescription>
            Upload the images here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <CommunityAddImageForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default AddImageModal;
