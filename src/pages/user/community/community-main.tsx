import React, { useState } from "react";
import Analytics from "./tabs/analytics";
import Overview from "./tabs/overview";
import Members from "./tabs/members";
import { Button } from "@components/ui/button";
import { useParams } from "react-router-dom";
import useGetFarmViewQuery from "../../../hooks/api/get/useGetFarmViewQuery";
import useGetFarmGalleryQuery from "../../../hooks/api/get/useGetFarmGalleryQuery";
import useGetFarmCropsQuery from "../../../hooks/api/get/useGetFarmCropsQuery";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/ui/avatar";
import useAuth from "../../../hooks/useAuth";
import Crops from "./tabs/crops";
import Gallery from "./tabs/gallery";
const CommunityMain = () => {
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const { data: farmDetails } = useGetFarmViewQuery(id || "");
  const { data: farmGallery } = useGetFarmGalleryQuery(id || "");
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  console.log(farmDetails, farmCrops, farmGallery);

  const [tab, setTab] = useState<string>("overview");
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
      <div className=" flex items-center gap-2 justify-start px-4 py-4 border-y border-border">
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "overview" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("overview")}
        >
          Overview
        </button>
        {/* <button
          className={`py-2 px-5 rounded-full ${
            tab === "analytics" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("analytics")}
        >
          Analytics
        </button> */}
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "crops" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("crops")}
        >
          Crops
        </button>
        {/* <button
          className={`py-2 px-5 rounded-full ${
            tab === "members" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("members")}
        >
          Members
        </button> */}
        <button
          className={`py-2 px-5 rounded-full ${
            tab === "gallery" ? "bg-primary text-white" : ""
          }`}
          onClick={() => setTab("gallery")}
        >
          Gallery
        </button>
      </div>
      <div>
        {tab === "overview" && <Overview />}
        {tab === "analytics" && <Analytics />}
        {tab === "crops" && <Crops />}
        {tab === "members" && <Members />}
        {tab === "gallery" && <Gallery />}
      </div>
    </div>
  );
};

export default CommunityMain;
