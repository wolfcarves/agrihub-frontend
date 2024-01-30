import React from "react";
import useGetReportTotalHarvestQuery from "../../../../../hooks/api/get/useGetReportTotalHarvestQuery";

const ReportSection = () => {
  const { data: harvestData } = useGetReportTotalHarvestQuery();
  console.log(harvestData);
  return (
    <div>
      <h4 className="font-poppins-semibold mb-4">Reports Overview</h4>
      <div className="grid grid-cols-12 gap-3">
        {harvestData?.slice(0, 3).map((harvest, i) => (
          <div
            key={i}
            className=" col-span-2  border flex flex-col gap-2 justify-center items-center rounded-md select-none pb-2 hover:shadow-md"
          >
            <img
              src={harvest.image}
              className="h-[8rem] w-full object-fill object-center rounded-t-md border-b"
            />
            <h5 className=" font-poppins-medium text-green-700">
              {harvest.crop_name}
            </h5>
            <p className=" text-primary font-poppins-medium">
              {harvest.total_harvested}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportSection;
