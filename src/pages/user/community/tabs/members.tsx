import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../../../../components/ui/dropdown-menu";
import { Button } from "../../../../components/ui/button";

const Members = () => {
  return (
    <Dialog>
      {" "}
      {/* 🔴 The dialog provider outside of the DropdownMenuContent */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <p>Trigger</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <DialogTrigger>Open Popup</DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* 🔴 DialogContent ouside of DropdownMenuContent */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Do you want to delete the entry? Deleting this entry cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Members;
