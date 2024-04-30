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
import useDebounce from "../../../../../hooks/utils/useDebounce";
import { SetURLSearchParams } from "react-router-dom";
interface HeaderProps {
  setSearchParams: SetURLSearchParams;
  searchParams: URLSearchParams;
}
const Header: React.FC<HeaderProps> = ({ setSearchParams, searchParams }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const { isAllowed, isMember } = useCommunityAutorization();

  const debouncedSearch = useDebounce((value: string) => {
    searchParams.set("search", value);
    setSearchParams(searchParams);
  }, 100);

  return (
    <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
      <Input
        placeholder="Search person..."
        onChange={e => debouncedSearch(e.target.value)}
        className="max-w-sm focus-visible:ring-0"
      />

      <div className=" flex gap-1 items-center">
        {/* <MemberApplicationDrawer /> */}
        <div className="flex items-center justify-end gap-2">
          {isAllowed && isMember && (
            <Button
              onClick={() => setDialog(true)}
              className="flex items-center gap-1"
            >
              <IoMdAdd size={15} /> Invite
            </Button>
          )}
        </div>
      </div>
      <MemberInviteDialog dialog={dialog} setDialog={setDialog} />
    </div>
  );
};

export default Header;
