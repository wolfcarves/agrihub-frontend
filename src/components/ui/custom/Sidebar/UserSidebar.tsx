import type { ReactNode } from "react";
import { BsTags } from "react-icons/bs";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SidebarContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col w-full max-w-[225px] min-h-full px-2 pt-10 border-r">
    {children}
  </div>
);

const UserSidebar = () => {
  return (
    <SidebarContainer>
      <Link to="/">
        <div className="flex gap-5 bg-primary rounded-2xl text-white p-5">
          <TbMessageCircleQuestion size={20} />
          <span className="text-sm font-poppins-medium">Questions</span>
        </div>
      </Link>

      <Link to="/">
        <div className="flex gap-5 rounded-2xl text-neutral-700 p-5 hover:bg-accent duration-200">
          <IoBookmarkOutline size={20} />
          <span className="text-sm font-poppins-medium">Saved</span>
        </div>
      </Link>

      <Link to="/">
        <div className="flex gap-5 rounded-2xl text-neutral-700 p-5 hover:bg-accent duration-200">
          <BsTags size={20} />
          <span className="text-sm font-poppins-medium">Tags</span>
        </div>
      </Link>
    </SidebarContainer>
  );
};

export default UserSidebar;
