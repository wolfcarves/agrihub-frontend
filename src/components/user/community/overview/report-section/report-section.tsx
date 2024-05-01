import React from "react";
import useGetReportTotalHarvestQuery from "../../../../../hooks/api/get/useGetReportTotalHarvestQuery";
import { HiOutlineDocumentReport } from "react-icons/hi";
const DisplayNone = () => {
  return (
    <div className="text-center min-h-32">
      <p className=" text-gray-400">No reports submitted yet for this farm.</p>
    </div>
  );
};
const ReportSection = () => {
  const { data: harvestData } = useGetReportTotalHarvestQuery();

  return (
    <div>
      <h4 className=" font-poppins-medium mb-4 flex items-center gap-1">
        <HiOutlineDocumentReport className="text-primary text-xl" />
        Report Overview
      </h4>
      {!harvestData?.length || 0 < 0 ? (
        <DisplayNone />
      ) : (
        <div className="grid grid-cols-12 gap-3">
          {harvestData?.slice(0, 3).map((harvest, i) => (
            <div
              key={i}
              className=" lg:col-span-2 sm:col-span-4 col-span-6 bg-white  border flex flex-col gap-2 justify-center items-center rounded-md select-none pb-2 hover:shadow-md"
            >
              <img
                src={harvest.image}
                className="h-[8rem] w-full object-cover object-center rounded-t-md border-b"
              />
              <h5 className=" font-poppins-medium text-green-700">
                {harvest.crop_name}
              </h5>
              <p className=" text-primary font-poppins-medium">
                Total Harvest : {harvest.total_kg} KG
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportSection;
