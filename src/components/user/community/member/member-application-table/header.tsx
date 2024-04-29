import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../ui/select";
import { Input } from "../../../../ui/input";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../../../../ui/button";
import { Search } from "lucide-react";
import MemberInviteDialog from "../member-invite-dialog/member-invite-dialog";
import useGetUsersMember from "../../../../../hooks/api/get/useGetUsersMember";
import useCommunityAutorization from "../../../../../hooks/utils/useCommunityAutorization";
import MemberApplicationDrawer from "../member-application-drawer/member-application-drawer";
interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: string | undefined;
  setFilter: React.Dispatch<
    React.SetStateAction<"pending" | "accepted" | "rejected" | undefined>
  >;
}
const Header: React.FC<HeaderProps> = ({
  search,
  setSearch,
  filter,
  setFilter
}) => {
  const [dialog, setDialog] = useState<boolean>(false);
  // const { isAllowed, isMember } = useCommunityAutorization();

  return (
    <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
      <Input
        placeholder="Search person..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="max-w-sm focus-visible:ring-0"
      />

      <div className=" flex gap-1 items-center">
        <MemberApplicationDrawer />
      </div>
      <MemberInviteDialog dialog={dialog} setDialog={setDialog} />
    </div>
  );
};

export default Header;
