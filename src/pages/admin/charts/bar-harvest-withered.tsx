import useGetMonthlyWithered from "@hooks/api/get/useGetMonthlyWithered";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";

const BarHarvestWithered = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>("12");
  const { data: barChartData, isLoading } = useGetMonthlyWithered({
    year: selectedYear,
    start: startMonth,
    end: endMonth
  });

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

  console.log(selectedYear, startMonth, endMonth);

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
    plugins: {
      title: {
        display: false,
        text: "Total withered and harvested crops each month"
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        beginAtZero: true
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
      {isLoading ? (
        <div className="animate-bounce">
          <div className="border border-green-300 shadow rounded-md p-4 w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <hr className="my-2" />
          <Bar data={data} options={options} />
        </>
      )}
    </>
  );
};

export default BarHarvestWithered;
