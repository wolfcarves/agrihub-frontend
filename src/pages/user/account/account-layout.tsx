import { Outlet, useLocation } from "react-router-dom";
import LoginWelcomeSvg from "/login-background.svg";
import { useEffect, useState } from "react";

const UserAccountLayout = () => {
  const pathname = useLocation().pathname;
  const routeWithImage = ["/account/login", "/account/signup"];

  const words = [
    "here",
    "with us",
    "hahahahah",
    "2",
    "1",
    "here",
    "with us",
    "hahahahah",
    "2",
    "1"
  ];

  return (
    <main className="group flex h-screen min-h-[675px]">
      <div className="flex flex-1 justify-center items-center px-3">
        <div className="flex flex-col justify-center w-full pb-20">
          <Outlet />
        </div>
      </div>

      {routeWithImage.includes(pathname) && (
        <div className="hidden lg:flex flex-1 flex-col justify-center items-center border-l">
          <img src={LoginWelcomeSvg as unknown as string} width={420} />

          <div className="py-5 max-w-[40rem] space-y-2.5 px-5">
            <h2 className="flex justify-center font-poppins-semibold text-center">
              Your journey starts&nbsp;
              <span className="text-primary">here</span>
            </h2>
            <h5 className="text-center">
              Welcome to AgriHub, the agriculture community platform dedicated
              to fostering collaboration and knowledge-sharing among farmers
            </h5>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserAccountLayout;
