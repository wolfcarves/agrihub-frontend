import React from "react";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import { useParams } from "react-router-dom";
import CropCard from "../crop-card/crop-card";

const CropItems = () => {
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  if (!farmCrops?.length || 0 > 0) {
    return (
      <div className="text-center">
        <p className=" text-gray-400">No crops found for this farm.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-12 gap-3">
      {farmCrops?.map((crop, i) => <CropCard crop={crop} key={i} />)}
    </div>
  );
};

export default CropItems;
