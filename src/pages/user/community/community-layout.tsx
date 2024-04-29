import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import CommunityLayoutContainer from "@components/user/community/container/CommunityLayoutContainer";
import CommunitySidebar from "@components/user/community/sidebar/CommunitySidebar";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import DialogBannedCommunity from "../../../components/user/community/dialog-banned-community/dialog-banned-community";
import { Helmet } from "react-helmet-async";

const CommunityLayout = () => {
  const { id } = useParams();
  const pathname = useLocation().pathname;
  const sidebarNoneRenderPaths = [
    "/community",
    "/community/register",
    `/community/apply/${id}`
  ];
  const sidebarRender = sidebarNoneRenderPaths.includes(pathname);
  const { data: UserData, isFetching } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isRemembered = localStorage.getItem("remembered");
  useEffect(() => {
    if (UserData?.isFarmBanned && (isRemembered === "false" || !isRemembered)) {
      setIsOpen(true);
    }
  }, [UserData?.isFarmBanned]);

  return (
    <CommunityLayoutContainer>
      {!sidebarRender && <CommunitySidebar />}
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
      <DialogBannedCommunity isOpen={isOpen} setIsOpen={setIsOpen} />
    </CommunityLayoutContainer>
  );
};

export default CommunityLayout;
