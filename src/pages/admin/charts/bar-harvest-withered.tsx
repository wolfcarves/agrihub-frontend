import useGetMonthlyWithered from "@hooks/api/get/useGetMonthlyWithered";
import React, { useRef, useState, MouseEvent } from "react";
import {
  Bar,
  Doughnut,
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
import { Chart, ChartOptions, plugins } from "chart.js";
import useGetReportCropDistribution from "../../../hooks/api/get/useGetReportCropDistribution";
import useGetReportGrowthRateDistribution from "../../../hooks/api/get/useGetReportGrowthRateDistribution";
import { chartColor } from "../../../constants/data";
import { Card } from "../../../components/ui/card";
import useGetReportHarvestDistribution from "../../../hooks/api/get/useGetReportHarvestDistribution";

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
  const dataHarvest = {
    labels: harvestDistribution?.map(item => item.farm_name),
    datasets: [
      {
        label: "Growth Rate",
        data: harvestDistribution?.map(item => item.percentage_distribution),
        backgroundColor: ["rgba(183, 235, 199, 1)"]
      }
    ]
  };

  const radarData = {
    labels: cropDistribution?.map(item => item.crop_name),
    datasets: [
      {
        label: "Harvest",
        data: cropDistribution?.map(item => item.total_harvested_qty),

        backgroundColor: chartColor.map(item => item),
        cutout: "85%",
        offset: 1,
        borderRadius: 10
      }
    ]
  };

  const optionsRadar: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top"
      }
    }
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
      <div className="grid grid-cols-12 gap-4">
        <Card
          className={`p-5 ${
            Number(cropDistribution?.length || 0) > 0
              ? "lg:col-span-8"
              : "lg:col-span-12"
          } col-span-12`}
        >
          <div className="flex flex-col justify-between flex-wrap ">
            <div>
              <h2 className="text-lg font-bold tracking-tight ">
                Farm harvest and withered each month
              </h2>
              <p className="text-xs text-gray-400">
                Click the bar to view the harvest summary of that month
              </p>
            </div>
            <div className="flex gap-4 justify-end mt-2">
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

          <div className="h-[350px] mt-4">
            <Bar
              ref={chartRef}
              onClick={onClick}
              data={data}
              options={options}
            />
          </div>
        </Card>
        {Number(cropDistribution?.length || 0) > 0 && (
          <Card className="p-5 lg:col-span-4 col-span-12">
            <h2 className="text-lg font-bold tracking-tight ">
              Crops Distribution
            </h2>
            <div className={`h-[350px] mt-4 duration-300`}>
              <Doughnut data={radarData} options={optionsRadar} />
            </div>
          </Card>
        )}
      </div>
      {Number(harvestDistribution?.length || 0) > 0 && (
        <Card className={` mt-4 p-5 duration-300`}>
          <h2 className="text-lg font-bold tracking-tight ">
            Farm Harvest Distribution
          </h2>
          <div className="h-[350px]">
            <Bar data={dataHarvest} options={optionsBar} />
          </div>
        </Card>
      )}
    </>
  );
};

export default BarHarvestWithered;
