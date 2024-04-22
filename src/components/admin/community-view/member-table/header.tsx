import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import useCommunityAutorization from "../../../../hooks/utils/useCommunityAutorization";
import Input from "../../../ui/custom/input/input";
import { Button } from "../../../ui/button";
import MemberInviteDialog from "../../../user/community/member/member-invite-dialog/member-invite-dialog";

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
const Header: React.FC<HeaderProps> = ({ search, setSearch }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const { isAllowed, isMember } = useCommunityAutorization();

  return (
    <div className="my-2 flex md:flex-row flex-col gap-3 justify-between">
      <Input
        placeholder="Search person..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="max-w-sm focus-visible:ring-0"
      />
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
      <MemberInviteDialog dialog={dialog} setDialog={setDialog} />
    </div>
  );
};

export default Header;
