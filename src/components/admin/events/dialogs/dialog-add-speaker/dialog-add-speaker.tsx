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

const DialogAddSpeaker = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className="gap-1 text-primary border-primary hover:text-white hover:bg-primary"
          variant={"outline"}
          onClick={() => setIsOpen(true)}
        >
          <IoMdAdd size={16} /> Add Speaker
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Speaker</DialogTitle>
          <DialogDescription>
            Fill out the form to add credits. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <EventSpeakerForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddSpeaker;
