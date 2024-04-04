import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";

const DialogToolReject = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="destructive">Rejected</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-between gap-4 items-start pt-4">
              <div>
                <DialogTitle>Reject Reqeust?</DialogTitle>
                <DialogDescription>
                  Select a reason why you want to reject this reqeust.
                </DialogDescription>
              </div>
            </div>

            <div className="mb-4">
              <Label>Note</Label>
              <div className="w-full">
                <Textarea />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <Button variant="secondary">Cancel</Button>
              <Dialog>
                <DialogTrigger>
                  <Button variant="destructive">Reject</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex justify-between gap-4 items-start pt-4">
                      <div>
                        <DialogTitle>Reject this request?</DialogTitle>
                        <DialogDescription className="my-4">
                          This action cannot be undone. This will permanently
                          place the request in reject status.
                        </DialogDescription>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-4">
                      <DialogClose>
                        <Button variant="secondary">Cancel</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button variant="destructive">Confirm</Button>
                      </DialogClose>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogToolReject;
