import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetReportCropExistingList from "../../../../../hooks/api/get/useGetReportCropExistingList";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../../../../../components/ui/avatar";
import { format } from "date-fns";
import { PiPlant } from "react-icons/pi";

const CropsReportExisting = () => {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = React.useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const { id } = useParams();

  const { data: CropExisting, isLoading } = useGetReportCropExistingList({
    id: id || "",
    search: search,
    page: String(page),
    perpage: "10",
    filter: filter,
    sort: undefined
  });

  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        {CropExisting?.reports?.map((crop, i) => (
          <div
            key={i}
            className="md:col-span-6 lg:col-span-4 col-span-12 hover:shadow-md grid grid-cols-12 rounded-lg border bg-main select-none"
          >
            <button
              // onClick={handleCropStats}
              // disabled={!isMember}
              className=" col-span-11 grid grid-cols-11"
            >
              <Avatar className="col-span-4 h-[8rem] w-full border-r rounded object-center">
                <AvatarImage className="rounded" src={crop.image} />
                <AvatarFallback className="rounded text-xl">
                  {crop?.crop_name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="col-span-7 p-2 text-start">
                <p className="font-semibold text-md">{crop.crop_name}</p>
                <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1">
                  Date Planted :{" "}
                  {format(new Date(crop.date_harvested || ""), "MM-dd-yyyy")}
                </p>
                <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1"></p>
                <p className="text-sm text-[#b6b6b6] font-medium line-clamp-1">
                  Withered Quantity : {crop.withered_crops}
                </p>

                <p className="flex items-center gap-2 mt-2 text-sm text-primary capitalize line-clamp-1">
                  <PiPlant size={18} /> Harvested Quantity: {crop.harvested_qty}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropsReportExisting;
