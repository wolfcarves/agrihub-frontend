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
import { BiMessageRoundedEdit, BiSolidMessageRoundedAdd } from "react-icons/bi";
interface dialogProps {
  questionId: string;
}
const DialogEditQuestions: React.FC<dialogProps> = ({ questionId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger>
        <Button className="p-3" onClick={() => setIsOpen(true)}>
          <BiMessageRoundedEdit size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Question</DialogTitle>
          <DialogDescription>Add questions you want to ask.</DialogDescription>
        </DialogHeader>
        <FormQuestions setIsOpen={setIsOpen} questionId={questionId} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditQuestions;
