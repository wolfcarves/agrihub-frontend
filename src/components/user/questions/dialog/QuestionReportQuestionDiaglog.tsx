import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/custom";

interface QuestionReportQuestionDiaglogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirmClick?: (reason: string) => void;
  onCancelClick?: () => void;
  isLoading?: boolean;
}

const QuestionReportQuestionDiaglog = ({
  open,
  onOpenChange,
  onConfirmClick,
  onCancelClick,
  isLoading
}: QuestionReportQuestionDiaglogProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h5 className="text-center">Report</h5>
            </DialogTitle>

            <DialogDescription>
              <h6 className="mt-1">Reason:</h6>
              <Input ref={inputRef} />
            </DialogDescription>

            <Button
              variant="destructive"
              className="mt-3 w-full"
              isLoading={isLoading}
              onClick={() => {
                onConfirmClick &&
                  onConfirmClick(inputRef?.current?.value ?? "");
              }}
            >
              Submit
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
    </>
  );
};

export default QuestionReportQuestionDiaglog;
