import React from "react";
import image from "@assets/images/kamatis.jpg";
import CropReportModal from "@components/user/community/reports-modal/modal";
import {
  PiDotsThreeVerticalLight,
  PiPlant,
  PiPottedPlant
} from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../../../components/ui/dropdown-menu";
import useGetFarmCropsQuery from "../../../../hooks/api/get/useGetFarmCropsQuery";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import AddCropModal from "../../../../components/user/community/crop/add-crop-modal/add-crop-modal";
import CropCard from "../../../../components/user/community/crop/crop-card/crop-card";

const Crops = () => {
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");

  return (
    <div className=" px-4 py-5">
      <div className="flex items-center justify-between">
        <h3 className=" font-poppins-medium">Crops</h3>
        <AddCropModal />
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-12 gap-3">
        {farmCrops?.map((crop, i) => <CropCard crop={crop} key={i} />)}
      </div>
    </div>
  );
};

export default Crops;
