import React, { MouseEvent, useRef, useState } from "react";
import { Bar, Doughnut, getElementAtEvent, Radar } from "react-chartjs-2";
import useGetReportTotalHarvestChart from "../../../../hooks/api/get/useGetReportTotalHarvestChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import useGetFarmAllCropsQuery from "../../../../hooks/api/get/useGetFarmAllCropsQuery";
import useGetReportCropDistributionCommunity from "../../../../hooks/api/get/useGetReportCropDistributionCommunity";
import { chartColor } from "../../../../constants/data";
import { Button } from "../../../ui/button";
import { FaFilePdf } from "react-icons/fa6";
import { useReactToPrint } from "react-to-print";
import { formatMonth } from "../../../lib/utils";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
const BarchartHarvest = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [selectedYear, setSelectedYear] = useState<string>(String(currentYear));
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>(String(currentMonth));
  const [activeIndex, setActiveIndex] = useState<string>("");
  const chartRef = useRef();

  const { id } = useParams();

  const { data: harvestChart } = useGetReportTotalHarvestChart({
    id: id || "",
    start: startMonth,
    end: endMonth,
    year: selectedYear
  });

  const { data: cropDistribution } = useGetReportCropDistributionCommunity({
    id: id || "",
    month: activeIndex
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

  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

  const handleChangeYear = (year: string) => {
    setSelectedYear(year);
  };

  const handleChangeStartMonth = (month: string) => {
    setStartMonth(month);
  };

  const handleChangeEndMonth = (month: string) => {
    setEndMonth(month);
  };

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current
  });

  return (
    <div
      ref={componentRef}
      className="grid grid-cols-12 gap-x-4 gap-y-[2.5rem]"
    >
      <div className="border border-border p-4 rounded-lg lg:col-span-8 col-span-12">
        <div className="flex justify-between mb-2 ">
          <div>
            <h5 className="font-poppins-medium">Monthly Harvest Kilogram</h5>
            <p className="text-xs text-gray-400">
              Click the bar to view the harvest summary of that month
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-end">
            <Button
              className="print:hidden p-4 bg-[#DE2429]"
              onClick={handlePrint}
            >
              <FaFilePdf size={16} />
            </Button>
            <Select
              onValueChange={e => handleChangeYear(e)}
              defaultValue={selectedYear}
            >
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>

            <Select
              onValueChange={e => handleChangeStartMonth(e)}
              defaultValue={startMonth}
            >
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Month From" />
              </SelectTrigger>
              <SelectContent>
                {months
                  .slice(
                    0,
                    String(currentYear) === selectedYear
                      ? Number(currentMonth)
                      : 12
                  )
                  .map(month => (
                    <SelectItem
                      key={month.value}
                      value={month.value}
                      disabled={month.value === String(currentMonth)}
                    >
                      {month.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={e => handleChangeEndMonth(e)}
              defaultValue={endMonth}
            >
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Month To" />
              </SelectTrigger>
              <SelectContent>
                {months
                  .slice(
                    0,
                    String(currentYear) === selectedYear
                      ? Number(currentMonth)
                      : 12
                  )
                  .map(month => {
                    return (
                      <SelectItem
                        key={month.value}
                        value={month.value}
                        onClick={() => handleChangeEndMonth(month.value)}
                        disabled={startMonth + "1" > month.value}
                      >
                        {month.label}
                      </SelectItem>
                    );
                  })}
              </SelectContent>
            </Select>
          </div>
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

export default BarchartHarvest;
