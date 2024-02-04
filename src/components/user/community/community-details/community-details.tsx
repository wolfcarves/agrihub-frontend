import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Button } from "../../../ui/button";
import useAuth from "../../../../hooks/useAuth";
import useGetFarmViewQuery from "../../../../hooks/api/get/useGetFarmViewQuery";
import { useNavigate, useParams } from "react-router-dom";

const CommunityDetails = () => {
  const navigate = useNavigate();
  const { isAuthenticated, data: UserData } = useAuth();
  const { id } = useParams();
  const isMember = id === UserData?.farm_id;
  const { data: farmDetails } = useGetFarmViewQuery(id || "");

  const handleEdit = () => {
    navigate(`/community/my-community/${UserData?.farm_id}/profile`);
  };
  return (
    <div className="flex justify-center p-5  ">
      <div className="w-full min-h-[10rem]  relative flex justify-center mt-[5rem]">
        <div className="absolute -z-10 bg-slate-700 w-[100%] rounded-xl min-h-[10rem] -top-[5rem]"></div>
        <div className=" bg-white w-[96%] rounded-xl shadow">
          <div className="pt-10 px-10 pb-5 grid grid-cols-10 md:gap-0 gap-3">
            <div className=" md:col-span-7 col-span-10 flex gap-3">
              <Avatar className="border rounded h-[5.5rem] w-[5.5rem]">
                <AvatarImage
                  src={farmDetails?.avatar ?? ""}
                  className="object-cover pointer-events-none select-none rounded"
                />
                <AvatarFallback className="rounded">
                  {farmDetails?.farm_name?.charAt(0)}
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
            <div className=" md:col-span-3 col-span-10 flex md:justify-end justify-center  items-start ">
              {isAuthenticated && isMember ? (
                <Button onClick={handleEdit} className="md:text-sm text-xs">
                  Edit Details
                </Button>
              ) : (
                <Button className="md:text-sm text-xs">Join</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;
