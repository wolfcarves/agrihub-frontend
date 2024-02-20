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
import LearningCreditForm from "../../form/learning-credit-form/learning-credit-form";
interface DialogProps {
  creditId: string;
}
const DialogEditCredits: React.FC<DialogProps> = ({ creditId }) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <TiEdit
          onClick={() => setIsOpen(true)}
          size={25}
          className="  border p-1 rounded-full text-green-600 border-green-400/45 bg-green-300/30 hover:animate-pulse"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Credits</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <LearningCreditForm setIsOpen={setIsOpen} creditId={creditId} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditCredits;
