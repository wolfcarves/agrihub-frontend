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
import EventPartnerForm from "../../form/event-partner-form/event-partner-form";
interface DialogProps {
  partnerId: string;
}
const DialogEditPartner: React.FC<DialogProps> = ({ partnerId }) => {
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
          <DialogTitle>Edit Event Partner</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <EventPartnerForm setIsOpen={setIsOpen} partnerId={partnerId} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditPartner;
