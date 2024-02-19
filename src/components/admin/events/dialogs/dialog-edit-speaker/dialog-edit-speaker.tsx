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
import { TiEdit } from "react-icons/ti";
import EventSpeakerForm from "../../form/event-speaker-form/event-speaker-form";
import { Button } from "../../../../ui/button";
import { FiEdit } from "react-icons/fi";
interface DialogProps {
  speakerId: string;
}
const DialogEditSpeaker: React.FC<DialogProps> = ({ speakerId }) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)} variant="default">
          <FiEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Speaker</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <EventSpeakerForm setIsOpen={setIsOpen} speakerId={speakerId} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditSpeaker;
