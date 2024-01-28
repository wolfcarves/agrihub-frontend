import React from "react";
import image from "@assets/images/kamatis.jpg";
import CropReportModal from "@components/user/community/reports-modal/modal";
import { PiDotsThreeVerticalLight, PiPlant } from "react-icons/pi";
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

const Crops = () => {
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  console.log(farmCrops, "asdasd");
  return (
    <div className=" px-4 py-5">
      <div className="grid grid-cols-12 gap-3">
        <div className="md:col-span-4 col-span-12 shadow-md grid grid-cols-12 rounded-lg">
          <img
            src={image}
            alt="plant"
            className=" col-span-4 h-full rounded-lg"
          />
          <div className=" col-span-7 p-2 ">
            <p className="font-semibold text-md"> Tomato (Front Space)</p>
            <p className=" text-sm text-[#b6b6b6] font-medium">
              Planted Date : July 20, 2023
            </p>
            <p className=" text-sm text-[#b6b6b6] font-medium">
              Expected Harvest : September 20, 2023
            </p>
            <p className="flex items-center gap-2 mt-2 text-primary">
              <PiPlant size={18} /> 20
            </p>
          </div>
          <div className=" col-span-1 flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-center pt-3">
                <BiDotsVerticalRounded size={15} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Crop Reports</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Update Report</DropdownMenuItem>
                <DropdownMenuItem>Pest Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <CropReportModal />
      </div>
    </div>
  );
};

export default Crops;
