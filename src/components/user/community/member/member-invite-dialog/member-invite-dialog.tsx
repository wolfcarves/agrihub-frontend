import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/custom/dialog/dialog";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import useAuth from "../../../../../hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../ui/avatar";
interface DialogProps {
  dialog: boolean;
  setDialog: Dispatch<SetStateAction<boolean>>;
}
const MemberInviteDialog: React.FC<DialogProps> = ({ dialog, setDialog }) => {
  //fake data
  const { data } = useAuth();

  return (
    <Dialog open={dialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite Members</DialogTitle>
          <DialogDescription>
            Enter the name of the member then click invite.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-12 gap-4 py-4">
          <Input
            placeholder="Search person..."
            className=" col-span-12 focus-visible:ring-0"
          />
          <div className=" col-span-12 h-[50vh] overflow-y-auto">
            {/* map nalang dito members */}
            <div className="w-full grid grid-cols-12 px-2 border-y py-2">
              <Avatar className=" col-span-2">
                <AvatarImage src={data?.avatar} />
                <AvatarFallback>{data?.firstname?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col col-span-8">
                <span className=" font-poppins-medium">{`${data?.firstname} ${data?.lastname}`}</span>
                <span className=" text-xs text-gray-500">{data?.email}</span>
              </div>
              <div className=" col-span-2">
                <Button>Invite</Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setDialog(false)}>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MemberInviteDialog;
