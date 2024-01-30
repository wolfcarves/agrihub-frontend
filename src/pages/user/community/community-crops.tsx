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
import { PiPlant, PiPottedPlantLight } from "react-icons/pi";
import CropDetails from "../../../components/user/community/crop/crop-details/crop-details";
import { TbReportAnalytics } from "react-icons/tb";
import CropStats from "../../../components/user/community/crop/crop-stats/crop-stats";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import { FaArrowLeftLong } from "react-icons/fa6";

const CommunityCrop = () => {
  const navigate = useNavigate();
  const { cropId } = useParams();
  const { data: CropData } = useGetReportCropStatsQuery(cropId || "");

  return (
    <OutletContainer className="w-full">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer mb-3 gap-x-2 text-gray-400 font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200"
      >
        <FaArrowLeftLong /> Back
      </div>
      <div className="grid grid-cols-12 gap-4">
        <img
          src={CropData?.image}
          className=" col-span-3 h-[15rem] object-fill object-center rounded-md hover:shadow-md border"
        />
        <div className=" col-span-9">
          <h2 className=" font-poppins-semibold  text-green-700 leading-tight ">
            {CropData?.crop_name}
          </h2>
          <div className="flex flex-col gap-4 border-t-4 border-primary pt-2">
            <CropDetails
              label="Growth Span :"
              value={CropData?.growth_span || ""}
              icon={<GiTreeGrowth size={18} />}
            />
            <CropDetails
              label="Seedling Season :"
              value={CropData?.seedling_season || ""}
              icon={<GiPlantSeed size={18} />}
            />
            <CropDetails
              label="Planting Season :"
              value={CropData?.planting_season || ""}
              icon={<PiPlant size={18} />}
            />
            <CropDetails
              label="Harvest Season :"
              value={CropData?.harvest_season || ""}
              icon={<GiFruitBowl size={18} />}
            />
          </div>
        </div>
        <div className="pl-2 col-span-12">
          <h4 className="font-poppins-semibold  text-green-700">About</h4>
          <div>{CropData?.description}</div>
        </div>

        <h4 className="font-poppins-semibold  text-green-700 pl-2 col-span-12 mt-5">
          Your {CropData?.crop_name} Statistics
        </h4>
        <CropStats
          label="Report"
          value={CropData?.report_count || "0"}
          icon={<TbReportAnalytics size={20} />}
        />
        <CropStats
          label="Planted"
          value={CropData?.planted_quantity || "0"}
          icon={<PiPottedPlantLight size={20} />}
        />
        <CropStats
          label="Yield"
          value={CropData?.net_yield || "0"}
          icon={<GiFruitTree size={20} />}
        />
        <CropStats
          label="Withered"
          value={CropData?.total_withered || "0"}
          icon={<GiPlantRoots size={20} />}
        />
      </div>
    </OutletContainer>
  );
};

export default CommunityCrop;
