import React, { useState } from "react";
import { Dialog, DialogContent } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import LoadingSpinner from "@icons/LoadingSpinner";

interface UserSettingsAccountEmailDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const UserSettingsAccountEmailDialog = ({
  open,
  onOpenChange
}: UserSettingsAccountEmailDialogProps) => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        {/* <LoadingSpinner className="text-primary text-xl mx-auto" /> */}

        {!isPasswordCorrect ? (
          <div className="space-y-3">
            <h5>Please enter your password first</h5>

            <Input placeholder="Password" />

            <Button className="rounded-full w-full" size="lg">
              Submit
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <h5>Please enter your password first</h5>

            <Input placeholder="Password" />

            <Button className="rounded-full w-full" size="lg">
              Submit
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserSettingsAccountEmailDialog;
