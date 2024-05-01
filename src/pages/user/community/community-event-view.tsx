import React from "react";
import useGetReportCropStatsQuery from "../../../hooks/api/get/useGetReportCropStatsQuery";
import { useNavigate, useParams } from "react-router-dom";
import AdminOutletContainer from "../../../components/admin/layout/container/AdminOutletContainer";
import {
  GiFruitBowl,
  GiFruitTree,
  GiPlantRoots,
  GiPlantSeed,
  GiTreeGrowth
} from "react-icons/gi";
import { PiBookBookmark, PiPlant, PiPottedPlantLight } from "react-icons/pi";
import CropDetails from "../../../components/user/community/crop/crop-details/crop-details";
import { TbReportAnalytics } from "react-icons/tb";
import CropStats from "../../../components/user/community/crop/crop-stats/crop-stats";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../components/ui/avatar";
import parse from "html-react-parser";
import useGetCommunityFarmEventView from "../../../hooks/api/get/useGetCommunityFarmEventView";
import { format } from "date-fns";
import Loader from "../../../icons/Loader";
import { TfiWorld } from "react-icons/tfi";
import { MdOutlineLocationOn } from "react-icons/md";
const CommunityEventView = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { data: eventData, isLoading } = useGetCommunityFarmEventView(
    eventId || ""
  );

  console.log(eventData);

  return (
    <OutletContainer className="px-4">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer mb-3 gap-x-2 text-gray-400 font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200"
      >
        <FaArrowLeftLong /> Back
      </div>
      <div className=" md:col-span-9 col-span-12 md:px-0 px-4">
        <h2 className=" font-poppins-semibold md:text-xl text-lg text-green-700 leading-tight ">
          {eventData?.title}
        </h2>
        <div className="flex flex-col gap-4 border-t-4 border-primary pt-2">
          <img
            src={eventData?.banner}
            className="h-[15rem] object-cover object-center"
          />
          <div className=" text-center">
            <span className="w-auto md:text-base text-xs bg-primary text-white rounded-2xl p-1 px-3">
              {eventData?.start_date && (
                <span>
                  {format(
                    new Date(eventData?.start_date?.slice(0, -5) || ""),
                    "MMMM do yyyy, h:mm a"
                  )}
                </span>
              )}{" "}
              -{" "}
              {eventData?.end_date && (
                <span>
                  {format(
                    new Date(eventData?.end_date?.slice(0, -5) || ""),
                    "MMMM do yyyy, h:mm a"
                  )}
                </span>
              )}
            </span>
          </div>
          <div className=" flex gap-2 capitalize items-center font-poppins-regular mt-2">
            <TfiWorld size={17} className="text-primary" /> {eventData?.type}
          </div>
          <div className=" md:text-base text-sm font-poppins-regular">
            {parse(eventData?.about || "")}
          </div>
          <div className="mt-5 flex gap-2 justify-end md:text-base text-sm">
            <span className="flex items-center text-gray-500 font-poppins-regular">
              <MdOutlineLocationOn size={15} />
              Going: {eventData?.going}
            </span>
            <span className="flex items-center text-gray-500 font-poppins-regular">
              <PiBookBookmark size={15} />
              Interested: {eventData?.interested}
            </span>
          </div>
        </div>
      </div>

      <Loader isVisible={isLoading} />
    </OutletContainer>
  );
};

export default CommunityEventView;
