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
import { SetURLSearchParams } from "react-router-dom";
import useDebounce from "../../../../../hooks/utils/useDebounce";
interface HeaderProps {
  setSearchParams: SetURLSearchParams;
  searchParams: URLSearchParams;
}
const Header: React.FC<HeaderProps> = ({ setSearchParams, searchParams }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  // const { isAllowed, isMember } = useCommunityAutorization();

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
        <Select
          onValueChange={value => {
            searchParams.set("filter", value);
            setSearchParams(searchParams);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <MemberApplicationDrawer />
      </div>
      <MemberInviteDialog dialog={dialog} setDialog={setDialog} />
    </div>
  );
};

export default Header;
