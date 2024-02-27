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

interface QuestionDeleteQuestionDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirmClick?: () => void;
  onCancelClick?: () => void;
  isLoading?: boolean;
}

const QuestionDeleteQuestionDialog = ({
  open,
  onOpenChange,
  onConfirmClick,
  onCancelClick,
  isLoading
}: QuestionDeleteQuestionDialogProps) => {
  return (
    <form>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h5 className="text-center">Delete Post</h5>
            </DialogTitle>

            <DialogDescription>
              <h6 className="mt-4 text-center">
                This action cannot be undone. This will permanently delete your
                question and remove the data from our servers.
              </h6>
            </DialogDescription>

            <Button
              variant="destructive"
              className="mt-3 w-full"
              isLoading={isLoading}
              onClick={() => {
                onConfirmClick && onConfirmClick();
              }}
            >
              Confirm
            </Button>

            <Button
              variant="ghost"
              className="w-full"
              onClick={() => {
                onCancelClick && onCancelClick();
              }}
            >
              Cancel
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default QuestionDeleteQuestionDialog;
