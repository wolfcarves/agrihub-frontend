import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import SuggestionsModal from "@components/user/community/suggestions-modal/modal";
import useGetReportGrowthRate from "../../../../hooks/api/get/useGetReportGrowthRate";
import { toast } from "sonner";
import StackbarWitheredHarvest from "../../../../components/user/community/charts/stackbar-withered-harvest";
import StatsGrowthRate from "../../../../components/user/community/charts/stats-growth-rate";
import LinechartGrowthHarvest from "../../../../components/user/community/charts/linechart-growth-harvest";
import PiechartCropsQuantity from "../../../../components/user/community/charts/piechart-crops-quantity";
import BarchartHarvest from "../../../../components/user/community/charts/barchart-harvest";
import { Button } from "../../../../components/ui/button";
import { useReactToPrint } from "react-to-print";
import useGetAnalyticsLatestHarvestRate from "../../../../hooks/api/get/useGetAnalyticsLatestHarvestRate";
import { useParams } from "react-router-dom";
Chart.register(...registerables);

const Analytics = () => {
  const { id } = useParams();
  const { data: harvestRate } = useGetAnalyticsLatestHarvestRate(id || "");
  const { data: growthRate } = useGetReportGrowthRate();

  useEffect(() => {
    if (
      Number(harvestRate?.latestHarvestRate || "") <
      Number(harvestRate?.pastHarvestRate || "")
    ) {
      toast.warning(
        "Action Needed. Lastest Harvest Rate Is Below Past Harvest Rate"
      );
    }
  }, []);

  return (
    <>
      <div className="py-10 px-4">
        {Number(harvestRate?.latestHarvestRate || "") <
          Number(harvestRate?.pastHarvestRate || "") && <SuggestionsModal />}

        <div className=" border-black border-1 p-1 grid grid-cols-12 gap-x-4 gap-y-[2.5rem] my-4 ">
          <div className=" xl:col-span-8 col-span-12 border border-border p-4 rounded-lg  print:w-full">
            <StackbarWitheredHarvest />
          </div>
          <div className=" lg:col-span-4 col-span-12 border border-border  p-4 pb-8 rounded-lg flex flex-col ">
            <StatsGrowthRate />
          </div>
          <div className="  lg:col-span-8 col-span-12 border border-border p-4 rounded-lg">
            <LinechartGrowthHarvest />
          </div>
          <div className=" lg:col-span-4 col-span-12 border border-border p-4 rounded-lg">
            <PiechartCropsQuantity />
          </div>
          <div className="  lg:col-span-12 col-span-12 ">
            <BarchartHarvest />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
