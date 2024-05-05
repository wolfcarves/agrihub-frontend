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
interface modalProp {
  eventId: string;
}
const UpdateEventsModal: React.FC<modalProp> = ({ eventId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className="md:text-sm text-[.5rem] md:p-4 p-2 md:h-10 h-8"
        >
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Update Event</DialogTitle>
          <DialogDescription>
            Modify the field of the data you want to change. Click submit when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <EventsForm eventId={eventId} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEventsModal;
