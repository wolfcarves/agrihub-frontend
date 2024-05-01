import React from "react";
import useGetReportCropListView from "../../../../../hooks/api/get/useGetReportCropListView";
import { useNavigate, useParams } from "react-router-dom";
import OutletContainer from "../../../../../components/user/questions/container/OutletContainer";
import { FaArrowLeftLong } from "react-icons/fa6";
import CropDetails from "../../../../../components/user/community/crop/crop-details/crop-details";
import {
  GiFruitBowl,
  GiPlantRoots,
  GiPlantSeed,
  GiTreeGrowth
} from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { format } from "date-fns";
import CropStats from "../../../../../components/user/community/crop/crop-stats/crop-stats";
import { TbReportAnalytics } from "react-icons/tb";
import Loader from "../../../../../icons/Loader";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../../../components/ui/avatar";

const CropsReportView = () => {
  const { cropId } = useParams();
  const navigate = useNavigate();
  const { data: CropReport, isLoading } = useGetReportCropListView(
    cropId || ""
  );
  if (isLoading) {
    return <Loader isVisible={isLoading} />;
  }

  return (
    <OutletContainer className="px-4">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer mb-3 gap-x-2 text-gray-400 font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200"
      >
        <FaArrowLeftLong /> Back
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Avatar className="md:col-span-3 col-span-12 h-[15rem] w-full rounded object-fill object-center hover:shadow-md border place-self-center">
          <AvatarImage className="rounded" src={CropReport?.image} />
          <AvatarFallback className="rounded text-2xl">
            {CropReport?.crop_name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className=" md:col-span-9 col-span-12 md:px-0 px-4">
          <h2 className=" font-poppins-semibold  text-green-700 leading-tight ">
            {CropReport?.crop_name}
          </h2>
          <div className="flex flex-col gap-4 border-t-4 border-primary pt-2">
            {CropReport?.date_planted && (
              <CropDetails
                label="Date Planted :"
                value={format(new Date(CropReport?.date_planted || ""), "PPP")}
                icon={<GiTreeGrowth size={18} />}
              />
            )}
            {CropReport?.date_harvested && (
              <CropDetails
                label="Date Harvested :"
                value={format(
                  new Date(CropReport?.date_harvested || ""),
                  "PPP"
                )}
                icon={<GiPlantSeed size={18} />}
              />
            )}
            {CropReport?.batch && (
              <CropDetails
                label="Date Last Harvested :"
                value={format(new Date(CropReport?.batch || ""), "PPP")}
                icon={<GiFruitBowl size={18} />}
              />
            )}
          </div>
        </div>

        <h4 className="font-poppins-semibold  text-green-700  col-span-12 mt-5">
          Your {CropReport?.crop_name} Report
        </h4>
        <CropStats
          label="Harvested"
          value={`${CropReport?.kilogram} KG` || "0"}
          icon={<TbReportAnalytics size={20} />}
        />

        <CropStats
          label="Withered"
          value={CropReport?.withered_crops || "0"}
          icon={<GiPlantRoots size={20} />}
        />
        <CropStats
          label="Growth Span"
          value={`${CropReport?.growth_span} Months` || "0"}
          icon={<TbReportAnalytics size={20} />}
        />
      </div>
      <div className="py-3">
        <h4 className="font-poppins-semibold  text-green-700 mb-2">Images</h4>
        <div className="flex flex-wrap gap-2">
          {CropReport?.images?.map((image, i) => (
            <img
              key={i}
              className="md:h-[10rem] h-[5rem] rounded hover:shadow-lg"
              src={image.image}
            />
          ))}
        </div>
      </div>
    </OutletContainer>
  );
};

export default CropsReportView;
