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
import EventSpeakerForm from "../../form/event-speaker-form/event-speaker-form";
import EventPartnerForm from "../../form/event-partner-form/event-partner-form";

const DialogAddPartner = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="gap-1 text-primary border-primary hover:text-white hover:bg-primary"
          variant={"outline"}
          onClick={() => setIsOpen(true)}
        >
          <IoMdAdd size={16} /> Add Partner
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Event Partners</DialogTitle>
          <DialogDescription>
            Fill out the form to add Event Partners. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <EventPartnerForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddPartner;
