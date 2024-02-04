import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../../ui/dialog";
import { Input } from "../../../../ui/input";
import { ScrollArea } from "../../../../ui/scroll-area";
import useGetUsersMember from "../../../../../hooks/api/get/useGetUsersMember";
import useFarmSendInviteMutation from "../../../../../hooks/api/post/useFarmSendInviteMutation";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../ui/avatar";
import { Button } from "../../../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useGetFarmMemberInvited from "../../../../../hooks/api/get/useGetFarmMemberInvited";
import useFarmCancelInviteMutation from "../../../../../hooks/api/post/useFarmCancelInviteMutation";
interface InvitedTabProps {}
const InvitedTab: React.FC<InvitedTabProps> = () => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { data: MemberList } = useGetFarmMemberInvited({
    search: search,
    page: page.toString(),
    perpage: "10",
    filter: ""
  });
  console.log(MemberList);

  const { mutateAsync: farmInviteCancel } = useFarmCancelInviteMutation();

  const handleInvite = async (userid: string) => {
    try {
      await farmInviteCancel(userid);
      toast.success("Cancelled Successfully");
    } catch (error) {
      toast.error("Failed to cancel invite");
    }
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle>Pending Invite</DialogTitle>
        <DialogDescription>
          Enter the name to find the invited member.
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
          {MemberList?.invitations?.map((user, i) => (
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
                  variant={"destructive"}
                  onClick={() => handleInvite(user.id)}
                >
                  Cancel
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
    </>
  );
};

export default InvitedTab;
