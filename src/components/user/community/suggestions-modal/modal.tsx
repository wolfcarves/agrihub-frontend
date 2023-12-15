import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../ui/dialog";

import { IoIosWarning } from "react-icons/io";
const SuggestionsModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <IoIosWarning className="text-3xl text-red-500" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Suggestions</DialogTitle>
        </DialogHeader>
        <h4>
          Our harvest is declining. Let's address this together. Consider these
          learning materials:
        </h4>
        <ul>
          <li>"Crop Rotation Techniques" - [Link]</li>
          <li>"Soil Health Maintenance" - [Link]</li>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestionsModal;
