import React from "react";
import { Button } from "@components/ui/button";
import { Outlet, useParams } from "react-router-dom";
import useGetFarmViewQuery from "../../../hooks/api/get/useGetFarmViewQuery";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/ui/avatar";
import useAuth from "../../../hooks/useAuth";
import TabNavlink from "../../../components/user/community/tab-navlink/tab-navlink";
const CommunityMain = () => {
  const { isAuthenticated, data: UserData } = useAuth();
  const { id } = useParams();
  const { data: farmDetails } = useGetFarmViewQuery(
    id || UserData?.farm_id || ""
  );
  const isMember = id === UserData?.farm_id;

  return (
    <div className="w-full">
      <div className="flex justify-center p-5 pb-[6rem] ">
        <div className="w-full h-[10rem] bg-slate-700 relative flex justify-center rounded-xl">
          <div className="absolute bg-white w-[96%] rounded-xl min-h-[10rem] top-[5rem]">
            <div className="pt-10 px-10 grid grid-cols-10">
              <div className=" col-span-7 flex gap-3">
                <Avatar className="border rounded h-[5.5rem] w-[5.5rem]">
                  <AvatarImage
                    src={farmDetails?.avatar ?? ""}
                    className="object-cover pointer-events-none select-none rounded"
                  />
                  <AvatarFallback className="rounded">
                    {farmDetails?.farm_name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{farmDetails?.farm_name}</h4>
                  <p className=" text-sm">{farmDetails?.location}</p>
                  <p className=" text-sm">{farmDetails?.district}</p>
                  <p className=" text-sm underline underline-offset-2">
                    see more...
                  </p>
                </div>
              </div>
              <div className=" col-span-3 flex justify-end items-start ">
                {isAuthenticated && <Button className="">Join Farm</Button>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2 justify-start px-4 py-4 border-y border-border overflow-x-auto">
        <TabNavlink title="Overview" to={``} end />
        {isMember && <TabNavlink title="Analytics" to={`analytics`} />}
        <TabNavlink title="Crops" to={`crops`} />
        {isMember && <TabNavlink title="Members" to={`members`} />}
        <TabNavlink title="Gallery" to={`gallery`} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default CommunityMain;
