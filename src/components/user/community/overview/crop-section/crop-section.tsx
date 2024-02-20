import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetFarmCropsQuery from "../../../../../hooks/api/get/useGetFarmCropsQuery";
import { IoChevronForward } from "react-icons/io5";
import CropCardReport from "../crop-card-report/crop-card-report";
import { PiPlantLight } from "react-icons/pi";

const DisplayNone = () => {
  return (
    <div className="text-center min-h-32">
      <p className=" text-gray-400">No crops found for this farm.</p>
    </div>
  );
};

const CropSection = () => {
  const { id } = useParams();
  const { data: farmCrops } = useGetFarmCropsQuery(id || "");
  return (
    <div>
      <h4 className=" font-poppins-medium mb-4 flex items-center gap-1">
        <PiPlantLight className="text-primary text-xl" />
        Crops Available
      </h4>
      {!farmCrops?.length || 0 < 0 ? (
        <DisplayNone />
      ) : (
        <>
          <div className="grid grid-cols-12 gap-3">
            {farmCrops
              ?.slice(0, 3)
              .map((crop, i) => <CropCardReport crop={crop} key={i} />)}
          </div>
          <div className="flex justify-end mt-2">
            <Link
              to={"crops"}
              className="flex flex-row  items-center text-green-700 leading-none hover:underline"
            >
              See more <IoChevronForward size={18} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CropSection;
