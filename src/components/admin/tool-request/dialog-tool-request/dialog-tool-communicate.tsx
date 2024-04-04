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

const DialogToolCommunicate = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="default">Ready to Communicate</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-between gap-4 items-start pt-4">
              <div>
                <DialogTitle>Add a note</DialogTitle>
                <DialogDescription>
                  Select a message for farmers to communicate.
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
              <DialogClose>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Dialog>
                <DialogTrigger>
                  <Button variant="default">Add</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex justify-between gap-4 items-start pt-4">
                      <div>
                        <DialogTitle>Communicate this request?</DialogTitle>
                        <DialogDescription className="my-4">
                          This action indicates that the request is ready to
                          hand over. Make sure the requested tool is ready, whis
                          will remind the user to communicate and claim their
                          request.
                        </DialogDescription>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-4">
                      <DialogClose>
                        <Button variant="secondary">Cancel</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button variant="default">Confirm</Button>
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

export default DialogToolCommunicate;
