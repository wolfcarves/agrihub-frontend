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
import { IoMdAddCircle } from "react-icons/io";
import EventsForm from "../events-form/events-form";

const CreateEventsModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className=" gap-2 "
          onClick={() => setIsOpen(true)}
        >
          <IoMdAddCircle size={17} className=" text-primary" /> Create Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>
            Fill this form to create event. Click submit when you're done.
          </DialogDescription>
        </DialogHeader>
        <EventsForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventsModal;
