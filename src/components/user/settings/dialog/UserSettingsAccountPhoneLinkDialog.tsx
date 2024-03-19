import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import LoadingSpinner from "@icons/LoadingSpinner";
import { DialogTitle } from "@radix-ui/react-dialog";

interface UserSettingsAccountPhoneLinkDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const UserSettingsAccountPhoneLinkDialog = ({
  open,
  onOpenChange
}: UserSettingsAccountPhoneLinkDialogProps) => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        {/* <LoadingSpinner className="text-primary text-xl mx-auto" /> */}
        <DialogHeader>
          <DialogTitle>
            <h4 className="font-merri-bold">Phone Link</h4>
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-3 items-center">
          <Input placeholder="Phone number" />
          <Button className="rounded-full px-5">Send OTP</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserSettingsAccountPhoneLinkDialog;
