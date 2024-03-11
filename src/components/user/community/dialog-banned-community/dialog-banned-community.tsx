import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../ui/custom/dialog/dialog";
import { Button } from "../../../ui/button";
import { Checkbox } from "../../../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
interface dialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DialogBannedCommunity: React.FC<dialogProps> = ({
  isOpen,
  setIsOpen
}) => {
  const [check, setCheck] = useState<CheckedState>(false);
  const handleDone = () => {
    setIsOpen(false);
    localStorage.setItem("remembered", String(check));
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your community is disabled</DialogTitle>
          <DialogDescription>
            Due to inactiveness. To fix you contact as{" "}
            <span className=" underline text-primary underline-offset-1 cursor-pointer">
              here
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={check}
            onCheckedChange={checked => setCheck(checked)}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Don't display again
          </label>
        </div>
        <DialogFooter>
          <Button onClick={handleDone}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBannedCommunity;
