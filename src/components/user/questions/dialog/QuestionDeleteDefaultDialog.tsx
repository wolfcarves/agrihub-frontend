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

interface QuestionDeleteDefaultDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirmClick?: () => void;
  onCancelClick?: () => void;
  isLoading?: boolean;
  title?: string;
  description?: string;
}

const QuestionDeleteDefaultDialog = ({
  open,
  onOpenChange,
  onConfirmClick,
  onCancelClick,
  isLoading,
  title,
  description
}: QuestionDeleteDefaultDialogProps) => {
  return (
    <form>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h5 className="text-xl font-merri-black text-center">{title}</h5>
            </DialogTitle>

            <DialogDescription>
              <h6 className="mt-4 text-center font-poppins-regular">
                {description}
              </h6>
            </DialogDescription>

            <div className="flex gap-2 justify-center pt-3 items-center">
              <Button
                variant="destructive"
                className="w-full py-6"
                size="lg"
                isLoading={isLoading}
                onClick={() => {
                  onConfirmClick && onConfirmClick();
                }}
              >
                Confirm
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full py-6"
                onClick={() => {
                  onCancelClick && onCancelClick();
                }}
              >
                Cancel
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default QuestionDeleteDefaultDialog;
