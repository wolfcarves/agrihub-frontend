import React, { Dispatch, SetStateAction, useState } from "react";
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
import useGetUsersMember from "../../../../../hooks/api/get/useGetUsersMember";
import { ScrollArea } from "../../../../ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useFarmSendInviteMutation from "../../../../../hooks/api/post/useFarmSendInviteMutation";
import { toast } from "sonner";
import InviteTab from "./invite-tab";
import InvitedTab from "./invited-tab";

interface DialogProps {
  dialog: boolean;
  setDialog: Dispatch<SetStateAction<boolean>>;
}
const MemberInviteDialog: React.FC<DialogProps> = ({ dialog, setDialog }) => {
  const [tab, setTab] = useState<"pending" | "invite">("invite");
  return (
    <Dialog open={dialog}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="">
          <div className="flex mb-4">
            <button
              className={`text-md px-3 py-1 font-poppins-medium ${
                tab === "invite" && "text-primary border-b-2 border-primary"
              }`}
              onClick={() => setTab("invite")}
            >
              Invite
            </button>
            <button
              className={`text-md px-3 py-1 font-poppins-medium ${
                tab === "pending" && "text-primary border-b-2 border-primary"
              }`}
              onClick={() => setTab("pending")}
            >
              Pending
            </button>
          </div>
          {tab === "invite" && <InviteTab />}
          {tab === "pending" && <InvitedTab />}
        </div>

        <DialogFooter>
          <Button onClick={() => setDialog(false)}>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MemberInviteDialog;
