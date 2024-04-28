import useGetMonthlyWithered from "@hooks/api/get/useGetMonthlyWithered";
import React, { useRef, useState, MouseEvent, useMemo } from "react";
import {
  Bar,
  Doughnut,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
  Line,
  Radar
} from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { Chart, ChartOptions, Plugin, plugins } from "chart.js";
import useGetReportCropDistribution from "../../../hooks/api/get/useGetReportCropDistribution";
import useGetReportGrowthRateDistribution from "../../../hooks/api/get/useGetReportGrowthRateDistribution";
import { chartColor } from "../../../constants/data";
import { Card } from "../../../components/ui/card";
import useGetReportHarvestDistribution from "../../../hooks/api/get/useGetReportHarvestDistribution";
import PieSeed from "./pie-seed";
import { formatNumberWithCommas } from "../../../components/lib/utils";

const BarHarvestWithered = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState<string>(String(currentYear));
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>(String(currentMonth));
  const [activeLabel, setActiveLabel] = useState<string>("");
  const { data: barChartData, isLoading: barLoading } = useGetMonthlyWithered({
    year: selectedYear,
    start: startMonth,
    end: endMonth
  });
  const { data: cropDistribution } = useGetReportCropDistribution({
    month: activeLabel
  });
  const { data: harvestDistribution } = useGetReportHarvestDistribution({
    month: activeLabel
  });

  const chartRef = useRef();

  const handleChangeYear = (year: string) => {
    setSelectedYear(year);
  };

  const handleChangeStartMonth = (month: string) => {
    setStartMonth(month);
  };

  const handleChangeEndMonth = (month: string) => {
    setEndMonth(month);
  };

  const {
    highestMonth,
    highestValue,
    lowestMonth,
    lowestValue,
    highestMonthWithered,
    highestValueWithered
  } = useMemo(() => {
    let highestWithered = Number.MIN_SAFE_INTEGER;
    let highestMonthWithered = "";
    let highestHarvested = Number.MIN_SAFE_INTEGER;
    let highestMonth = "";
    let lowestHarvested = Number.MAX_SAFE_INTEGER;
    let lowestMonth = "";

    barChartData?.forEach(item => {
      if (item.harvested && item.month && item.withered) {
        if (item?.harvested > highestHarvested) {
          highestHarvested = item.harvested;
          highestMonth = item.month;
        }
        if (item?.withered > highestWithered) {
          highestWithered = item.withered;
          highestMonthWithered = item.month;
        }
        if (item?.harvested < lowestHarvested) {
          lowestHarvested = item.harvested;
          lowestMonth = item.month;
        }
      }
    });

    return {
      highestMonth,
      highestValue: highestHarvested,
      highestMonthWithered,
      highestValueWithered: highestWithered,
      lowestMonth,
      lowestValue: lowestHarvested
    };
  }, [barChartData]);

  const labels = barChartData?.map(item => item.month);
  const data = {
    labels,
    datasets: [
      {
        label: "Withered",
        data: barChartData?.map(item => item.withered),
        backgroundColor: "rgba(255, 182, 193, 0.5)",
        borderColor: "rgba(217, 83, 79, 1)",
        borderWidth: 1
      },
      {
        label: "Harvested",
        data: barChartData?.map(item => item.harvested),
        backgroundColor: "rgba(144, 238, 144, 0.2)",
        borderColor: "rgba(92, 184, 92, 1)",
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true
      },
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
        display: "auto",
        anchor: "end" as "end",
        align: "start" as "start",
        offset: 0,
        color: "rgba(4, 147, 114, 1)" // Customize datalabels color
      }
    }
  };
  const dataHarvest = {
    labels: harvestDistribution?.map(item => item.farm_name),
    datasets: [
      {
        label: "Harvest",
        data: harvestDistribution?.map(item => item.farm_harvest_qty),
        backgroundColor: ["rgba(183, 235, 199, 1)"]
      }
    ]
  };

  const lineData = {
    labels: cropDistribution?.map(item => item.crop_name),
    datasets: [
      {
        label: "Harvest",
        data: cropDistribution?.map(item => item.total_harvested_qty),

        backgroundColor: "rgba(33, 196, 93)",
        borderColor: "rgba(33, 196, 93)",
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };

  const optionsLine: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      datalabels: {
        display: "auto",
        color: "rgba(27, 163, 156)",
        anchor: "end" as "end",
        align: "top" as "top"
      }
    }
  };

  const optionsBar: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      y: {
        display: false,
        ticks: {
          display: false
        }
      },
      x: { display: false }
    },
    plugins: {
      datalabels: {
        anchor: "start", // Anchor the labels to the start of the datapoint
        align: "end", // Align the text after the anchor point
        formatter: function (value, context) {
          if (context.chart.data.labels) {
            return `${context?.chart?.data?.labels[
              context.dataIndex
            ]} - ${value}`;
          }
        }
      }
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

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (chartRef.current && labels) {
      const index = getElementAtEvent(chartRef.current, event)[0].index;
      const activeLabel = index + 1;
      setActiveLabel(String(activeLabel) || "");
    }
  };

  return (
    <>
      <div className=" grid grid-cols-12 gap-4">
        <Card className={`p-5 col-span-12 lg:col-span-8`}>
          <div className="flex justify-between flex-wrap sm:flex-nowrap ">
            <div>
              <h2 className="text-lg font-bold tracking-tight ">
                Farm harvest and withered each month
              </h2>
              <p className="text-xs text-gray-400">
                Click the bar to view the harvest summary of that month
              </p>
            </div>
            <div className="flex gap-4 justify-end">
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
                      <SelectItem key={month.value} value={month.value}>
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
                          disabled={startMonth > month.value}
                        >
                          {month.label}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="h-[350px] mt-4">
            <Bar
              ref={chartRef}
              onClick={onClick}
              data={data}
              options={options}
            />
          </div>
          {!barLoading && (
            <p className="text-xs text-gray-400 mt-1">
              Based on the graph, the highest harvest among the selected months
              is in <span className=" text-primary">{highestMonth}</span> with a
              harvest value of{" "}
              <span className=" text-primary">
                {formatNumberWithCommas(highestValue)}
              </span>
              . The lowest harvest is in{" "}
              <span className="  text-destructive">{lowestMonth}</span> at{" "}
              <span className="  text-destructive">
                {formatNumberWithCommas(lowestValue)}
              </span>
              . The highest withered count is in{" "}
              <span className="  text-destructive">{highestMonthWithered}</span>{" "}
              at{" "}
              <span className="  text-destructive">
                {formatNumberWithCommas(highestValueWithered)}
              </span>
              .
            </p>
          )}
        </Card>
        <Card className="col-span-12 lg:col-span-4 lg:block hidden p-5">
          <PieSeed />
        </Card>
        {Number(cropDistribution?.length || 0) > 0 && (
          <>
            <Card className="p-5 lg:col-span-7 col-span-12">
              <h2 className="text-lg font-bold tracking-tight ">
                Crops Distribution
              </h2>
              <div
                className={`h-[350px] mt-4 duration-300 flex flex-col gap-1`}
              >
                <Line data={lineData} options={optionsLine} />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                The{" "}
                <span className=" text-primary">
                  {cropDistribution && cropDistribution[0]?.crop_name}
                </span>{" "}
                has the highest harvest of this month with a harvest value of{" "}
                <span className=" text-primary">
                  {cropDistribution && cropDistribution[0]?.total_harvested_qty}
                </span>
              </p>
            </Card>
            <Card className={` p-5 duration-300 lg:col-span-5 col-span-12`}>
              <h2 className="text-lg font-bold tracking-tight ">
                Farm Harvest Distribution
              </h2>
              <div className="h-[350px]">
                <Bar data={dataHarvest} options={optionsBar} />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                The{" "}
                <span className=" text-primary">
                  {harvestDistribution && harvestDistribution[0]?.farm_name}
                </span>{" "}
                has the highest harvest of this month with a harvest value of{" "}
                <span className=" text-primary">
                  {harvestDistribution &&
                    harvestDistribution[0]?.farm_harvest_qty}
                </span>
              </p>
            </Card>
          </>
        )}
        <Card className="col-span-12 lg:col-span-4 block lg:hidden p-5">
          <PieSeed />
        </Card>
      </div>
    </>
  );
};

export default BarHarvestWithered;
