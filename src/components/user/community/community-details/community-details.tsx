import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Button } from "../../../ui/button";
import useAuth from "../../../../hooks/useAuth";
import useGetFarmViewQuery from "../../../../hooks/api/get/useGetFarmViewQuery";
import { useNavigate, useParams } from "react-router-dom";
import useCommunityAutorization from "../../../../hooks/utils/useCommunityAutorization";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const CommunityDetails = () => {
  const navigate = useNavigate();
  const { isAuthenticated, data: UserData } = useAuth();
  const { id } = useParams();
  const { isMember, isAllowed } = useCommunityAutorization();
  const { data: farmDetails } = useGetFarmViewQuery(id || "");

  const handleEdit = () => {
    navigate(`/community/my-community/${UserData?.farm_id}/profile`);
  };
  return (
    <div className="flex justify-center p-5  ">
      <div className="w-full md:min-h-[8rem] min-h-[6rem]  relative flex justify-center mt-[6rem]">
        <img
          className="absolute -z-10 bg-slate-700 w-[100%] rounded-xl h-[10rem] -top-[6rem] "
          src={farmDetails?.cover_photo}
        />
        <div className=" bg-white w-[96%] rounded-xl md:py-6 py-3 md:px-10 px-4 shadow">
          <div className=" grid grid-cols-10 md:gap-0 gap-1">
            <div className=" md:col-span-8 col-span-10 flex gap-3">
              <Avatar className="border rounded md:h-[5.5rem] h-[4.4rem] md:w-[5.5rem] w-[4.4rem]">
                <AvatarImage
                  src={farmDetails?.avatar ?? ""}
                  className="object-cover pointer-events-none select-none rounded"
                />
                <AvatarFallback className="rounded">
                  {farmDetails?.farm_name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold md:text-lg text-base ">
                  {farmDetails?.farm_name}
                </h4>
                <p className=" md:text-sm font-poppins-medium text-xs text-gray-600 line-clamp-2">
                  {farmDetails?.location}
                </p>
                <p className=" md:text-sm font-poppins-medium text-xs text-gray-600">
                  {farmDetails?.district}
                </p>
              </div>
            </div>
            <div className=" md:col-span-2 col-span-10 flex md:flex-col flex-row justify-between md:mt-0 mt-1">
              <div className=" flex md:justify-end justify-center  items-start">
                {" "}
                {isAuthenticated ? (
                  isMember &&
                  isAllowed && (
                    <Button
                      onClick={handleEdit}
                      className="md:text-sm text-xs md:p-4 p-2 md:h-10 h-8 md:my-2 my-0"
                    >
                      Manage
                    </Button>
                  )
                ) : (
                  <Button className="md:text-sm text-xs">
                    {isAuthenticated ? "Join" : "Login to Join"}
                  </Button>
                )}
              </div>

              <div className="flex justify-end items-center w-full  gap-3 text-gray-500 md:text-[1.2rem] text-base">
                <FaSquareFacebook />
                <IoLogoInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;
