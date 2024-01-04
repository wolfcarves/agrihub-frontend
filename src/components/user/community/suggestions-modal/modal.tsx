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
      <DialogTrigger className="bg-red-300 rounded-lg flex items-center p-1 w-full gap-2 px-2">
        <IoIosWarning className="text-3xl text-red-500" />
        <p className="text-white">
          Action Needed: Monthly Growth Dips Below 1.37% -{" "}
          <span className="hover:underline underline-offset-3">
            Click here for Immediate Solutions and Contribute Your Insights.
          </span>
        </p>
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
