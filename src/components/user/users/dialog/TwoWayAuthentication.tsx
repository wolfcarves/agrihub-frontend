import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "../../../ui/custom/dialog/dialog";
import { Button } from "../../../ui/button";
import { Checkbox } from "../../../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useNavigate } from "react-router-dom";
import useAuth from "@hooks/useAuth";
interface dialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TwoWayAuthentication: React.FC<dialogProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState<CheckedState>(false);
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("remembered", String(check));
  };

  const handleNavigate = () => {
    setIsOpen(false);
    navigate("/settings/account");
  };

  const { data: userData } = useAuth();
  const email = userData?.email;

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Add {email ? "phone number" : "email"} for more security.
          </DialogTitle>
          <DialogDescription>
            This will help you secure and recover your account from any
            unauthorized access in the future.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={check}
            onCheckedChange={checked => setCheck(checked)}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Remember my choice
          </label>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleNavigate}>
            Add {email ? "phone" : "email"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TwoWayAuthentication;
