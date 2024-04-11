import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/custom/dialog/dialog";

import FormRequestTool from "./form-request-tool";

const DialogRequestTool = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>+Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Tools</DialogTitle>
          <DialogDescription>
            Fill out the form to request tools needed. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <FormRequestTool setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogRequestTool;
