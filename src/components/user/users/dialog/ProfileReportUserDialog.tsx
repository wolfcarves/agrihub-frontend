import React, { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Button } from "@components/ui/button";
import { LuDiamond } from "react-icons/lu";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { BiImage } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const commonReason = [
  "Spam",
  "Abusive",
  "Posting unrelated stuff",
  "Trolling",
  "Hate Speech",
  "Harassment",
  "Scamming",
  "Fake News/Disinformation",
  "Pornography",
  "Violent Content"
] as const;

interface ProfileReportUserDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirmClick?: (reason: string, file?: File) => void;
  onCancelClick?: () => void;
  isLoading?: boolean;
}

const ProfileReportUserDialog = ({
  open,
  onOpenChange,
  onConfirmClick,
  onCancelClick,
  isLoading
}: ProfileReportUserDialogProps) => {
  const [reasonValue, setReasonValue] =
    useState<(typeof commonReason)[number]>();

  const [description, setDescription] = useState<string>("");
  const [img, setImg] = useState<File | undefined>();

  const inputImageRef = useRef<HTMLInputElement>(null);

  const handleReasonClick = (reason: (typeof commonReason)[number]) => {
    setReasonValue(reason);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[25rem] p-4">
        <DialogHeader>
          <h5 className="text-md font-inter-medium">Report this user?</h5>
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
                Description
              </span>
              <Textarea
                className="text-sm font-inter-regular resize-none"
                placeholder="Add some explanation regarding to reason"
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            {img && (
              <div className="py-2">
                <img src={URL.createObjectURL(img)} className="max-w-[7rem]" />
              </div>
            )}

            <div className="mt-3 space-y-1.5">
              {img ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setImg(undefined);
                    }}
                  >
                    <IoClose size={18} />
                    <span className="text-sm font-inter-regular">
                      Remove photo
                    </span>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => {
                      inputImageRef.current?.click();
                    }}
                  >
                    <BiImage size={18} className="mt-0.5" />
                    <span className="text-sm font-inter-regular">
                      Add photo
                    </span>
                  </Button>
                </>
              )}

              <input
                ref={inputImageRef}
                type="file"
                className="hidden"
                accept="image/jpg,image/jpeg,image/png"
                onChange={e => {
                  if (e.target?.files) setImg(e.target.files?.[0]);
                }}
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
                  onConfirmClick(
                    (reasonValue + ": " + description) as string,
                    img
                  );
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

export default ProfileReportUserDialog;
