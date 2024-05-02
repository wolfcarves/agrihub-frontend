import React, { ComponentProps, useEffect, useState } from "react";
import { UserSidebarNavLink } from "@components/ui/custom";
import { BsTags } from "react-icons/bs";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { IoBookmarkOutline } from "react-icons/io5";
import useAuth from "@hooks/useAuth";
import { useLocation } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { RiLeafLine, RiLightbulbLine } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import {
  PiListMagnifyingGlass,
  PiNewspaper,
  PiNewspaperLight,
  PiShieldWarning
} from "react-icons/pi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { CiChat1, CiSquareQuestion } from "react-icons/ci";
import { BiHomeAlt } from "react-icons/bi";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { GoBook, GoTasklist } from "react-icons/go";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import useGetFarmViewQuery from "@hooks/api/get/useGetFarmViewQuery";
import useGetCmsAboutDetails from "@hooks/api/get/useGetCmsAboutDetails";

type UserHeaderMobileSidebarProps = ComponentProps<"div"> & {
  onLinkClick?: () => void;
};

const UserHeaderMobileSidebar = ({
  onLinkClick
}: UserHeaderMobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = useLocation().pathname;
  const { isAuthenticated, data: userData } = useAuth();

  const handleEventClick = () => {
    onLinkClick && onLinkClick();
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const { data: UserData } = useAuth();
  const id = UserData?.farm_id;
  const { data: farmData } = useGetFarmViewQuery(id || "");

  const farmName = farmData?.farm_name;
  const { data: aboutDetails } = useGetCmsAboutDetails();
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="block lg:hidden">
        <span
          className=" items-center text-xl opacity-75"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {!isOpen ? (
            <HiMenuAlt2 className="text-2xl" />
          ) : (
            <IoMdClose className="text-2xl" />
          )}
        </span>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-scroll">
        <h4 className="py-3 px-4 mb-8 font-bold text-gray-800 lg:px-8 ">
          <div className="flex items-center justify-center px-8">
            <div className="flex-none">
              <img
                src={S3_BASE_URL + aboutDetails?.agrihub_user_logo}
                width={50}
                className="mx-auto"
              />
            </div>
          </div>
        </h4>
        <UserSidebarNavLink
          to="/"
          title="Home"
          logo={<BiHomeAlt size={20} />}
          onClick={handleEventClick}
        />

        <div className="mt-10">
          <h6 className="font-poppins-semibold pb-5">Community</h6>

          <UserSidebarNavLink
            to="/community"
            title={farmName || "Community"}
            logo={<BsPeople size={20} />}
            onClick={handleEventClick}
            end={
              pathname === "/community/explore" ||
              pathname === `/community/reports/${userData?.farm_id}` ||
              pathname === `/community/request/${userData?.farm_id}` ||
              pathname === `/community/problem/${userData?.farm_id}` ||
              pathname === `/community/request/${userData?.farm_id}` ||
              pathname === `/community/chat/${userData?.farm_id}` ||
              pathname === `/community/task/${userData?.farm_id}`
            }
          />

          {userData?.farm_id && userData.role === "farm_head" && (
            <UserSidebarNavLink
              to={`/community/chat/${userData?.farm_id}`}
              title="Chats"
              logo={<PiNewspaper size={20} />}
              end
              onClick={handleEventClick}
            />
          )}
          {userData?.farm_id && (
            <UserSidebarNavLink
              to={`/community/task/${userData?.farm_id}`}
              title="Task"
              logo={<CiChat1 size={20} />}
              end
              onClick={handleEventClick}
            />
          )}
          {userData?.farm_id && (
            <UserSidebarNavLink
              to={`/community/reports/${userData?.farm_id}`}
              title="Reports"
              logo={<GoTasklist size={20} />}
              end
              onClick={handleEventClick}
            />
          )}
          {userData?.farm_id && userData.role === "farm_head" && (
            <UserSidebarNavLink
              to={`/community/problem/${userData.farm_id}`}
              title="Problem"
              logo={<PiShieldWarning size={20} />}
              end
              onClick={handleEventClick}
            />
          )}
          {userData?.farm_id && userData.role === "farm_head" && (
            <UserSidebarNavLink
              to={`/community/request/${userData?.farm_id}`}
              title="Request"
              logo={<CiSquareQuestion size={20} />}
              end
              onClick={handleEventClick}
            />
          )}
          <UserSidebarNavLink
            to="/community/explore"
            title="Explore"
            logo={<PiListMagnifyingGlass size={21} />}
            onClick={handleEventClick}
            end
          />
        </div>

        <div className="mt-10">
          <h6 className="font-poppins-semibold pb-5">Resources</h6>

          <UserSidebarNavLink
            to="/planting-calendar"
            title="Planting Calendar"
            logo={<RiLeafLine size={20} />}
            end
            onClick={handleEventClick}
          />

          <UserSidebarNavLink
            to="/learning-materials"
            title="Learning Material"
            logo={<GoBook size={20} />}
            end
            onClick={handleEventClick}
          />

          <UserSidebarNavLink
            to="/blogs"
            title="Blogs"
            logo={<RiLightbulbLine size={20} />}
            end
            onClick={handleEventClick}
          />

          <UserSidebarNavLink
            to="/events"
            title="Events"
            logo={<IoCalendarNumberOutline size={20} />}
            end
            onClick={handleEventClick}
          />
        </div>
        <div className="mt-10">
          <h6 className="font-poppins-semibold pb-5">Forums</h6>
          <UserSidebarNavLink
            to="/forum"
            title="Questions"
            logo={<TbMessageCircleQuestion size={20} />}
            end={pathname === "/forum/tags"}
            onClick={handleEventClick}
          />

          <UserSidebarNavLink
            to="/forum/tags"
            title="Tags"
            logo={<BsTags size={20} />}
            onClick={handleEventClick}
            end
          />

          {isAuthenticated && (
            <UserSidebarNavLink
              to={`/users/${userData?.id}/${userData?.username}/saved`}
              title="Saved"
              logo={<IoBookmarkOutline size={20} />}
              end
              onClick={handleEventClick}
            />
          )}
        </div>

        <div className="mt-10">
          <h6 className="font-poppins-semibold pb-5">Others</h6>

          <UserSidebarNavLink
            to="/about"
            title="About"
            logo={<RxQuestionMarkCircled size={20} />}
            end
            onClick={handleEventClick}
          />

          <UserSidebarNavLink
            to="/terms-condition"
            title="Terms and Condition"
            logo={<PiNewspaperLight size={20} />}
            end
            onClick={handleEventClick}
          />

          <UserSidebarNavLink
            to="/privacy-policy"
            title="Privacy Policy"
            logo={<PiNewspaperLight size={20} />}
            end
            onClick={handleEventClick}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UserHeaderMobileSidebar;
