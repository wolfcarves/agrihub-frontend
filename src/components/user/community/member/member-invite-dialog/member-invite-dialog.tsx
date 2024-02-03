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

interface DialogProps {
  dialog: boolean;
  setDialog: Dispatch<SetStateAction<boolean>>;
}
const MemberInviteDialog: React.FC<DialogProps> = ({ dialog, setDialog }) => {
  const [inviteStates, setInviteStates] = useState<Record<string, boolean>>({});
  const { data } = useAuth();
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { data: MemberList } = useGetUsersMember({
    search: search,
    page: page.toString(),
    perpage: "20",
    filter: ""
  });

  const { mutateAsync: farmInviteMember } = useFarmSendInviteMutation();

  const handleInvite = async (userid: string) => {
    try {
      const currentDate = new Date();
      const futureDate = new Date(currentDate);
      futureDate.setDate(currentDate.getDate() + 7);
      const expiresat = futureDate.toISOString().split("T")[0];
      await farmInviteMember({ userid, expiresat });
      toast.success("Invited Successfully");
      setInviteStates(prevStates => ({
        ...prevStates,
        [userid]: true
      }));
    } catch (error) {
      console.error("Error inviting member:", error);
      toast.error("Failed to invite member");
    }
  };

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
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <ScrollArea className=" col-span-12 h-[47vh] overflow-y-auto ">
            {MemberList?.members?.map((user, i) => (
              <div
                key={i}
                className="w-full grid grid-cols-12 px-2 border-y py-2"
              >
                <Avatar className=" col-span-2">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user?.firstname?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col col-span-7 select-none">
                  <span className=" font-poppins-medium line-clamp-1">{`${user?.firstname} ${user?.lastname}`}</span>
                  <span className=" text-xs text-gray-500">{user?.email}</span>
                </div>
                <div className=" col-span-3 flex justify-center">
                  <Button
                    key={i}
                    variant={inviteStates[user.id] ? "outline" : "default"}
                    onClick={() => handleInvite(user.id)}
                  >
                    {inviteStates[user.id] ? "Sent" : "Invite"}
                  </Button>
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="flex justify-center col-span-12">
            <Button
              variant="ghost"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost">{MemberList?.pagination?.page}</Button>
            <Button
              variant="ghost"
              disabled={page === MemberList?.pagination?.total_pages}
              onClick={() => setPage(page + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
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
