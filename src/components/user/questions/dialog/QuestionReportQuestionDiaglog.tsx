import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { LuDiamond } from "react-icons/lu";
import { Textarea } from "@components/ui/textarea";

const commonReason = [
  "Misinformation",
  "Self-harm or Suicide",
  "Hate",
  "Spam",
  "Threatening violence",
  "Harassment",
  "Impersonation",
  "Pornography",
  "Abusive"
] as const;

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
  const [reasonValue, setReasonValue] =
    useState<(typeof commonReason)[number]>();

  const [description, setDescription] = useState<string>("");

  const handleReasonClick = (reason: (typeof commonReason)[number]) => {
    setReasonValue(reason);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[25rem] p-4">
        <DialogHeader>
          <h5 className="text-md font-inter-medium">Report this question?</h5>
        </DialogHeader>

        <DialogDescription>
          <div className="flex items-center gap-1 mt-3">
            <LuDiamond />
            <h5 className="text-base font-inter-medium">
              Please fill out neccessary fields
            </h5>
          </div>

          <div className="flex flex-wrap w-full gap-1 py-5">
            {commonReason.map(reason => (
              <Button
                key={reason}
                variant="outline"
                size="sm"
                onClick={() => handleReasonClick(reason)}
              >
                <span className="text-sm font-inter-regular">{reason}</span>
              </Button>
            ))}
          </div>

          <div>
            <div className="space-y-1.5">
              <span className="text-sm font-inter-semibold text-foreground/70">
                Reason
              </span>
              <Input
                value={reasonValue}
                className="font-inter-regular"
                placeholder="You can add your own reason here."
                onChange={e => setReasonValue(e.target.value as any)}
              />
            </div>

            <div className="mt-3 space-y-1.5">
              <span className="text-sm font-inter-semibold text-foreground/70">
                Description (Optional)
              </span>
              <Textarea
                className="text-sm font-inter-regular resize-none"
                placeholder="Add some explanation regarding to reason"
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>
        </DialogDescription>

        <div className="flex gap-2 items-center justify-end">
          <Button
            variant="outline"
            className="mt-3 w-full"
            onClick={() => onCancelClick && onCancelClick()}
          >
            <span className="font-inter-semibold">Cancel</span>
          </Button>

          <Button
            variant="default"
            className="mt-3 w-full"
            isLoading={isLoading}
          >
            <span
              className="font-inter-semibold"
              onClick={() => {
                onConfirmClick &&
                  onConfirmClick((reasonValue + ": " + description) as string);
              }}
            >
              Submit Report
            </span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionReportQuestionDiaglog;
