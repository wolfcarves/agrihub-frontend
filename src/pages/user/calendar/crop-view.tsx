import { Button } from "@components/ui/button";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { MONTHS } from "./calendar";
import LoadingSpinner from "@icons/LoadingSpinner";

const CropView = () => {
  const { data, isLoading: isCropDataLoading } = useGetCropsQuery();
  const params = useParams();

  const cropData = data?.filter(p => p.name === params.cropName)[0];

  return (
    <div className="w-full ">
      <div className="relative w-full h-[20rem] rounded-b-xl overflow-hidden bg-gray-200 border">
        {isCropDataLoading ? (
          <LoadingSpinner className="absolute inset-0 text-gray-400 text-lg m-auto" />
        ) : (
          <img src={cropData?.image} className="w-full h-full object-cover" />
        )}
      </div>

      <div>
        <h1 className="text-9xl font-poppins-bold uppercase mt-5">
          {cropData?.name}
        </h1>
        <h4 className="w-[40rem]">{cropData?.description}</h4>
      </div>

      <div className="space-y-5 mt-10">
        <div className="space-y-3">
          <h5 className="font-poppins-medium">Planting Season</h5>
          <h6>{MONTHS[Number(cropData?.planting_season)]}</h6>
        </div>

        <div className="space-y-3">
          <h5 className="font-poppins-medium">Harvest Season</h5>
          <h6>{MONTHS[Number(cropData?.harvest_season)]}</h6>
        </div>

        <div className="space-y-3">
          <h5 className="font-poppins-medium">Seedling Season</h5>
          <h6>{MONTHS[Number(cropData?.seedling_season)]}</h6>
        </div>
      </div>

      <div className="mt-10">
        <Link to="..">
          <Button>Back to crops</Button>
        </Link>
      </div>
    </div>
  );
};

export default CropView;
