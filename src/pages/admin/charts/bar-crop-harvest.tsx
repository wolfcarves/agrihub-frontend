import React, { MouseEvent, useRef, useState } from "react";
import { Bar, Doughnut, getElementAtEvent, Radar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import useGetReportTotalHarvestChart from "../../../hooks/api/get/useGetReportTotalHarvestChart";
import useGetFarmAllCropsQuery from "../../../hooks/api/get/useGetFarmAllCropsQuery";
import useGetReportCropDistributionCommunity from "../../../hooks/api/get/useGetReportCropDistributionCommunity";
import { formatMonth } from "../../../components/lib/utils";
import { chartColor } from "../../../constants/data";
import useGetFarmListQuery from "../../../hooks/api/get/useGetFarmListQuery";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../components/ui/select";

const BarCropHarvest = () => {
  const [activeIndex, setActiveIndex] = useState<string>("");
  const chartRef = useRef();

  const [farmId, setFarmId] = useState<string>("");

  const { data: harvestChart } = useGetReportTotalHarvestChart(farmId || "");

  const { data: cropDistribution } = useGetReportCropDistributionCommunity({
    id: farmId || "",
    month: activeIndex
  });
  const { data: farmData, isLoading } = useGetFarmListQuery({
    search: undefined,
    page: "1",
    filter: undefined,
    perpage: "10000"
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    onHover: (event: any, chartElement: any) => {
      // console.log(event);
      // console.log(chartElement);
      if (chartElement.length === 1) {
        event.native.target.style.cursor = "pointer";
      }
      if (chartElement.length === 0) {
        event.native.target.style.cursor = "default";
      }
    },
    plugins: {
      datalabels: {
        display: true,
        color: "#ffffff",
        font: {
          weight: "bold" as "bold"
        },
        formatter: function (value: any) {
          console.log(value);
          if (value === "0") {
            return "";
          } else {
            return `${value}KG`;
          }
        }
      }
    }
  };
  const optionsRadar = {
    responsive: true,
    maintainAspectRatio: false,

    scale: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      datalabels: {
        display: true,
        color: "rgba(228, 241, 254, 1)",
        anchor: "end" as "end",
        align: "start" as "start",
        offset: 8,
        font: {
          weight: "bold" as "bold"
        },
        formatter: function (value: any) {
          return `${value}KG`;
        }
      }
    }
  };

  const barData = {
    labels: Object.keys(harvestChart || {}),
    datasets: [
      {
        label: "Harvest",
        data: Object.values(harvestChart || {}),
        backgroundColor: ["#21c45d"]
      }
    ]
  };

  const radarData = {
    labels: cropDistribution?.map(item => item.crop_name),
    datasets: [
      {
        label: "Harvest",
        data: cropDistribution?.map(item => item.total_harvested_qty),

        backgroundColor: chartColor.map(item => item)
      }
    ]
  };

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (chartRef.current) {
      const index = getElementAtEvent(chartRef.current, event)[0].index;
      const activeLabel = index + 1;
      setActiveIndex(String(activeLabel) || "");
    }
  };

  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-[2.5rem]">
      <div className="border border-border p-4 rounded-lg lg:col-span-8 col-span-12">
        <div className="flex justify-between ">
          <div>
            <h5 className="font-poppins-medium">Monthly Harvest Kilogram</h5>
            <p className="text-xs text-gray-400">
              Click the bar to view the harvest summary of that month
            </p>
          </div>

          {!isLoading && (
            <Select onValueChange={value => setFarmId(value)}>
              <SelectTrigger className="w-auto focus-visible:ring-0">
                <SelectValue placeholder="Select Farm" />
              </SelectTrigger>
              <SelectContent className=" max-h-[40vh]">
                {farmData?.farms?.map((farm, i) => (
                  <SelectItem key={i} value={farm?.id || ""}>
                    {farm.farm_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
        <div className="h-[350px]  ">
          <Bar
            className="chart_export"
            ref={chartRef}
            onClick={onClick}
            data={barData}
            options={chartOptions}
          />
        </div>
      </div>
      <div className=" lg:col-span-4 col-span-12 ">
        {Number(cropDistribution?.length || 0) > 0 && (
          <div
            className={`border border-border p-4 rounded-lg duration-300 ${
              Number(cropDistribution?.length || 0) > 0 ? "h-full" : "h-0"
            }`}
          >
            <h5 className="font-poppins-medium">
              Crops Harvest : {formatMonth(activeIndex)}
            </h5>
            <div className="h-[350px]  ">
              <Doughnut data={radarData} options={optionsRadar} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarCropHarvest;
