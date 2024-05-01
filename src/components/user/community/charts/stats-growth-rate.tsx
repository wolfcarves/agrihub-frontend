import React from "react";
import useGetReportGrowthRate from "../../../../hooks/api/get/useGetReportGrowthRate";
import useGetAnalyticsLatestHarvestRate from "../../../../hooks/api/get/useGetAnalyticsLatestHarvestRate";
import { useParams } from "react-router-dom";
import { PiPlantFill } from "react-icons/pi";

const StatsGrowthRate = () => {
  const { id } = useParams();
  const { data: harvestRate } = useGetAnalyticsLatestHarvestRate(id || "");
  const { data: growthRate } = useGetReportGrowthRate();

  return (
    <>
      <div className=" font-semibold text-lg">Latest Harvest Rate</div>
      <p className="font-semibold text-md text-gray-500 flex gap-1 items-center">
        <PiPlantFill size={20} /> {harvestRate?.plant}
      </p>
      <div className="flex-grow grid place-items-center">
        {!harvestRate ? (
          <div className="text-center text-primary">Not enough report data</div>
        ) : (
          <div className="text-center">
            <div
              className={`text-[4rem] p-0 m-0 leading-none  ${
                Number(harvestRate?.latestHarvestRate) >
                Number(harvestRate?.pastHarvestRate)
                  ? " text-primary"
                  : Number(harvestRate?.latestHarvestRate) ===
                    Number(harvestRate?.pastHarvestRate)
                  ? " text-blue-600"
                  : Number(harvestRate?.latestHarvestRate) <
                    Number(harvestRate?.pastHarvestRate)
                  ? " text-destructive"
                  : "text-gray-600"
              } `}
            >
              {harvestRate?.latestHarvestRate}%
            </div>
            <div className=" text-gray-400 font-medium flex items-center justify-center">
              {harvestRate?.pastHarvestRate}% harvest rate in last harvest
            </div>
          </div>
        )}
      </div>
      <div className=" text-gray-400 font-medium flex items-center justify-center ">
        {harvestRate?.message}
      </div>
    </>
  );
};

export default StatsGrowthRate;
