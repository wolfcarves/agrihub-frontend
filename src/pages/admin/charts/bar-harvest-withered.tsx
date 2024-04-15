import useGetMonthlyWithered from "@hooks/api/get/useGetMonthlyWithered";
import React, { useRef, useState, MouseEvent } from "react";
import {
  Bar,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent
} from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import { Chart, ChartOptions } from "chart.js";
import useGetReportCropDistribution from "../../../hooks/api/get/useGetReportCropDistribution";
import useGetReportGrowthRateDistribution from "../../../hooks/api/get/useGetReportGrowthRateDistribution";

const BarHarvestWithered = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [startMonth, setStartMonth] = useState<string>("1");
  const [activeLabel, setActiveLabel] = useState<string>("");
  const [endMonth, setEndMonth] = useState<string>("12");
  const { data: barChartData, isLoading } = useGetMonthlyWithered({
    year: selectedYear,
    start: startMonth,
    end: endMonth
  });
  const { data: cropDistribution } = useGetReportCropDistribution({
    month: activeLabel
  });
  const { data: growthDistribution } = useGetReportGrowthRateDistribution({
    month: activeLabel
  });

  const chartRef = useRef();

  console.log(growthDistribution, activeLabel);

  const handleChangeYear = (year: string) => {
    setSelectedYear(year);
  };

  const handleChangeStartMonth = (month: string) => {
    setStartMonth(month);
    console.log(month);
  };

  const handleChangeEndMonth = (month: string) => {
    setEndMonth(month);
  };

  const labels = barChartData?.map(item => item.month);
  const data = {
    labels,
    datasets: [
      {
        label: "Harvested",
        data: barChartData?.map(item => item.harvested),
        backgroundColor: "rgba(144, 238, 144, 0.2)",
        borderColor: "rgba(92, 184, 92, 1)",
        borderWidth: 1
      },
      {
        label: "Withered",
        data: barChartData?.map(item => item.withered),
        backgroundColor: "rgba(255, 182, 193, 0.5)",
        borderColor: "rgba(217, 83, 79, 1)",
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
    }
  };
  const dataGrowth = {
    labels: growthDistribution?.map(item => item.crop_name),
    datasets: [
      {
        label: "Growth Rate",
        data: growthDistribution?.map(item => item.percentage_distribution),
        backgroundColor: ["rgba(183, 235, 199, 1)"]
      }
    ]
  };
  const optionsBar: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y"
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
      <div className="flex justify-between flex-wrap sm:flex-nowrap">
        <h2 className="text-xl font-bold tracking-tight ">
          Farm harvest and withered each month
        </h2>
        <div className="flex gap-4 justify-end">
          <Select onValueChange={e => handleChangeYear(e)}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={e => handleChangeStartMonth(e)}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Month From" />
            </SelectTrigger>
            <SelectContent>
              {months.map(month => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={e => handleChangeEndMonth(e)}>
            <SelectTrigger className="w-auto">
              <SelectValue placeholder="Month To" />
            </SelectTrigger>
            <SelectContent>
              {months.map(month => (
                <SelectItem
                  key={month.value}
                  value={month.value}
                  onClick={() => handleChangeEndMonth(month.value)}
                >
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="h-96 mt-4">
        <Bar ref={chartRef} onClick={onClick} data={data} options={options} />
      </div>
      <div
        className={`${
          Number(growthDistribution?.length || 0) > 0 ? "h-96" : "h-0"
        } mt-4 duration-300`}
      >
        {Number(growthDistribution?.length || 0) > 0 && (
          <Bar data={dataGrowth} options={optionsBar} />
        )}
      </div>
    </>
  );
};

export default BarHarvestWithered;
