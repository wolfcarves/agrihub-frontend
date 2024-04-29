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
import FormQuestions from "./form-questions";
import { Button } from "../../../../ui/button";
import { MdQuestionMark } from "react-icons/md";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";

const DialogCreateQuestions = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger>
        <Button className="gap-1" onClick={() => setIsOpen(true)}>
          <BiSolidMessageRoundedAdd size={18} /> Add Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Question</DialogTitle>
          <DialogDescription>Add questions you want to ask.</DialogDescription>
        </DialogHeader>
        <FormQuestions setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateQuestions;
