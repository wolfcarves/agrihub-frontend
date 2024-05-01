import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { UserFooter, UserHeader } from "@components/ui/custom";
import { MdOutlineQuestionMark } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import useGetCmsAboutDetails from "@hooks/api/get/useGetCmsAboutDetails";
import useAuth from "@hooks/useAuth";
import TwoWayAuthentication from "@components/user/users/dialog/TwoWayAuthentication";
import { CheckedState } from "@radix-ui/react-checkbox";

const MainLayout = () => {
  const loader = useRef<LoadingBarRef>(null);
  const location = useLocation();
  const { data: UserData } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: userData } = useAuth();
  const isRemembered = localStorage.getItem("remembered");
  const twoFactored = !userData?.email || !userData?.contact_number;

  useEffect(() => {
    if (
      userData &&
      twoFactored &&
      (isRemembered === "false" || !isRemembered)
    ) {
      setIsOpen(true);
    }
  }, [userData, twoFactored, isRemembered]);

  useEffect(() => {
    loader?.current?.continuousStart(30, 0);

    const timeout = setTimeout(() => {
      loader?.current?.complete();
    }, 300);

    return () => clearTimeout(timeout);
  }, [location]);
  const { data: aboutDetails } = useGetCmsAboutDetails();
  const S3_BASE_URL = import.meta.env.VITE_S3_BUCKET_BASEURL;
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href={S3_BASE_URL + aboutDetails?.agrihub_user_logo}
          sizes="16x16"
        />
      </Helmet>
      <div className="flex flex-col min-h-[100dvh]">
        <LoadingBar
          ref={loader}
          color="rgb(59 130 246)"
          height={3}
          shadow={true}
        />

        <ScrollRestoration
          getKey={loc => {
            return loc.pathname;
          }}
        />

        <UserHeader />
        <Outlet />
        <UserFooter />

        <Link
          to="/helps/guides"
          className="fixed bottom-5 end-5 p-2 bg-primary/70 hover:bg-primary rounded-full cursor-pointer group duration-200"
        >
          <MdOutlineQuestionMark className="text-background text-xl lg:text-2xl" />

          <span className="absolute -left-[4.5rem] top-1.5 text-foreground font-poppins-medium text-sm bg-background py-1.5 px-4 my-auto rounded-2xl group-hover:visible group-hover:opacity-100 opacity-0 invisible duration-200 border">
            Help
          </span>
        </Link>
      </div>
      <TwoWayAuthentication isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MainLayout;
