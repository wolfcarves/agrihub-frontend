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
import { useNavigate } from "react-router-dom";
interface dialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DialogBannedCommunity: React.FC<dialogProps> = ({
  isOpen,
  setIsOpen
}) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState<CheckedState>(false);
  const handleDone = () => {
    // setIsOpen(false);
    navigate("/about/#contact");
    // localStorage.setItem("remembered", String(check));
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-center">
            Your community is disabled
          </DialogTitle>
          <DialogDescription className=" text-center">
            Due to inactiveness. Try contacting us to fix this
          </DialogDescription>
        </DialogHeader>
        {/* <div className="flex items-center space-x-2">
          <Checkbox
            checked={check}
            onCheckedChange={checked => setCheck(checked)}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Don't display again
          </label>
        </div> */}
        <div className="flex justify-center">
          <Button onClick={handleDone}> Contact us</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBannedCommunity;
