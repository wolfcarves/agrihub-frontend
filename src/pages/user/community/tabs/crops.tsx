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
import { useParams } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import AddCropModal from "../../../../components/user/community/crop/add-crop-modal/add-crop-modal";

const Crops = () => {
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  console.log(farmCrops, "asdasd");
  return (
    <div className=" px-4 py-5">
      <div className="flex items-center justify-between">
        <h3 className=" font-poppins-medium">Crops</h3>
        <AddCropModal />
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-12 gap-3">
        {farmCrops?.map((crop, i) => (
          <div
            key={i}
            className="md:col-span-4 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-white select-none"
          >
            <img
              src={crop.image}
              alt="plant"
              className=" col-span-4 h-[8rem] w-full border-r rounded-lg object-center"
            />
            <div className=" col-span-8 p-2 ">
              <p className="font-semibold text-md"> {crop.name}</p>
              <p className=" text-sm text-[#b6b6b6] font-medium">
                Planting Season : {crop.planting_season}
              </p>
              <p className=" text-sm text-[#b6b6b6] font-medium">
                Seedling Season : {crop.seedling_season}
              </p>
              <p className=" text-sm text-[#b6b6b6] font-medium">
                Harvest Season : {crop.harvest_season}
              </p>
              <p className="flex items-center gap-2 mt-2 text-sm text-primary capitalize">
                <PiPlant size={18} /> Growth Span : {crop.growth_span}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crops;
