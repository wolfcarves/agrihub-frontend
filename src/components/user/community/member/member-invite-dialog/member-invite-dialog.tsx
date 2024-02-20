import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter
} from "@components/ui/custom/dialog/dialog";
import { Button } from "../../../../ui/button";
import InviteTab from "./tabs/invite-tab";
import PendingTab from "./tabs/pending-tab";

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
          {tab === "pending" && <PendingTab />}
        </div>

        <DialogFooter>
          <Button onClick={() => setDialog(false)}>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MemberInviteDialog;
