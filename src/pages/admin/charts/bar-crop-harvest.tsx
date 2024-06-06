import React, { MouseEvent, useMemo, useRef, useState } from "react";
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
import PerFarmHarvestReport from "./reports/per-farm-harvest-report";
import useYearList from "../../../hooks/utils/useYearList";

const BarCropHarvest = () => {
  const years = useYearList();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [selectedYear, setSelectedYear] = useState<string>(
    String(currentYear) || "2"
  );
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>(String(currentMonth));
  const [activeIndex, setActiveIndex] = useState<string>("");
  const chartRef = useRef();

  const [farmId, setFarmId] = useState<string>("936975470650327041");

  const { data: harvestChart, isLoading: loadHarvest } =
    useGetReportTotalHarvestChart({
      id: farmId || "",
      start: startMonth,
      end: endMonth,
      year: selectedYear
    });

  const lastTwoItem = useMemo(() => {
    const values = Object.values(harvestChart ?? {});
    const slicedArray = values.slice(0, -1);

    const sumArray = slicedArray.reduce((curr, acc) => {
      return Number(curr) + Number(acc);
    }, 0);

    const average = sumArray / slicedArray.length;

    const slicedValues = values.slice(-2);
    const pm = average;
    const cm = Number(slicedValues[1]);
    if (cm === 0) {
      return "N/A"; // or any other default value you prefer
    }
    const final = ((cm - pm) / cm) * 100;
    return final.toFixed(2);
  }, [harvestChart]);

  const lastTwoMonths = useMemo(() => {
    const values = Object.keys(harvestChart ?? {});
    const slicedValues = values.slice(-2);
    return slicedValues;
  }, [harvestChart]);

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
        <div className="flex md:flex-row flex-col gap-4 justify-between ">
          <div>
            <h5 className="font-poppins-medium">Monthly Harvest Per Farm</h5>
            <p className="text-xs text-gray-400">
              Click the bar to view the harvest summary of that month
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {!isLoading && (
              <Select
                onValueChange={value => setFarmId(value)}
                defaultValue="936975470650327041"
              >
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
            <Select
              onValueChange={e => handleChangeYear(e)}
              defaultValue={selectedYear}
            >
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year, i) => (
                  <SelectItem key={i} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
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
                      disabled={month.value >= String(endMonth)}
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
            <PerFarmHarvestReport />
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
        {!loadHarvest &&
          (lastTwoItem === "N/A" ? (
            <p className="text-xs text-gray-400 mt-1">
              Not enough data to current month to compare
            </p>
          ) : (
            <p className="text-xs text-gray-400 mt-1">
              This graph compares the amount of harvest farms collected with the
              crops as of{" "}
              {/* <span className=" text-primary">{lastTwoMonths[0]}</span>– */}
              <span className=" text-primary">{lastTwoMonths[1]}</span>{" "}
              <span className=" text-primary">{selectedYear}</span>. Based on
              system calculations, it seems that your harvest for{" "}
              <span className=" text-primary">{lastTwoMonths[1]}</span> has
              changed by{" "}
              <span
                className={
                  Number(lastTwoItem) > 0 ? " text-primary" : "text-destructive"
                }
              >
                {lastTwoItem}%
              </span>{" "}
              compared to the previous months.
            </p>
          ))}
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
