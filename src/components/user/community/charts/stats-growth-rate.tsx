import React from "react";
import useGetReportGrowthRate from "../../../../hooks/api/get/useGetReportGrowthRate";

const StatsGrowthRate = () => {
  const { data: growthRate } = useGetReportGrowthRate();
  return (
    <>
      <div className=" font-semibold text-lg">Latest Growth Rate</div>
      <div className="flex-grow grid place-items-center">
        {!growthRate ? (
          <div className="text-center text-primary">Not enough report data</div>
        ) : (
          <div className="text-center">
            <div
              className={`text-[4rem] p-0 m-0 leading-none  ${
                growthRate?.growth_rate && growthRate?.growth_rate <= 85.0
                  ? " text-orange-600"
                  : "text-primary"
              } `}
            >
              {growthRate?.growth_rate}%
            </div>
            <div className=" text-gray-400 font-medium flex items-center justify-center">
              {growthRate?.average_growth_rate} average growth rate
            </div>
          </div>
        )}
      </div>
      <div className=" text-gray-400 font-medium flex items-center justify-center ">
        {growthRate?.results}
      </div>
    </>
  );
};

export default StatsGrowthRate;
