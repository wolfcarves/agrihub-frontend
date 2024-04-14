import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/custom/dialog/dialog";
import FormAddProblem from "./form-add-problem";

const DialogAddProblem = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>+Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit a problem</DialogTitle>
          <DialogDescription>
            Fill out the form to submit a problem. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <FormAddProblem setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddProblem;
