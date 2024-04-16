import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";

interface QuestionProfanityWarningDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const QuestionProfanityWarningDialog = ({
  open,
  onOpenChange
}: QuestionProfanityWarningDialogProps) => {
  return (
    <form>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h5 className="text-xl font-poppins-semibold text-center text-destructive">
                Warning
              </h5>
            </DialogTitle>

            <DialogDescription>
              <h6 className="mt-4 text-center font-poppins-regular">
                Please be mindful of your language. Using offensive words can
                harm others and disrupt our community. Let's keep the
                conversation respectful and inclusive. Kindly review your
                message and consider removing any offensive language. This time
                we will not allow to post your question, answer or comment. If
                you want to continue we are asking to remove them. Thank you for
                helping us maintain a positive environment for everyone
              </h6>
            </DialogDescription>

            <Button
              variant="outline"
              className="rounded-full w-full mt-5 text-foreground/90"
              size="lg"
              onClick={() => onOpenChange && onOpenChange(false)}
            >
              <h5>I understand.</h5>
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default QuestionProfanityWarningDialog;
