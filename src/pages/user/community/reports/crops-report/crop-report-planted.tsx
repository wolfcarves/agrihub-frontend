import React from "react";
import OutletContainer from "../../../../../components/user/questions/container/OutletContainer";
import CommunityAddCropReportForm from "../../../../../components/user/community/form/CommunityAddCropReportForm/CommunityAddReportForm";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import withAuthGuard from "../../../../../higher-order/account/withAuthGuard";
import CommunityPlantCropReportForm from "../../../../../components/user/community/form/CommunityPlantCropReportForm/CommunityPlantCropReportForm";

const CropsReportPlanted = () => {
  const navigate = useNavigate();
  return (
    <OutletContainer className="w-full px-4">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer mb-2 gap-x-2 text-gray-400 font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200"
      >
        <FaArrowLeftLong /> Back
      </div>
      <h3 className=" font-poppins-medium">Crop Planted Form </h3>
      <hr className="mb-4 mt-1 border-primary border" />
      <CommunityPlantCropReportForm />
    </OutletContainer>
  );
};

export default withAuthGuard(CropsReportPlanted, ["farm_head"]);
