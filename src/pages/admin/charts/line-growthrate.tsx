import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import useGetReportGrowthRateMonthly from "../../../hooks/api/get/useGetReportGrowthRateMonthly";

const GrowthRateLineChart = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState<string>(String(currentYear));
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>(String(currentMonth));
  const { data: growthMonthly } = useGetReportGrowthRateMonthly({
    year: selectedYear,
    start: startMonth,
    end: endMonth
  });

  const handleChangeYear = (year: string) => {
    setSelectedYear(year);
  };

  const handleChangeStartMonth = (month: string) => {
    setStartMonth(month);
  };

  const handleChangeEndMonth = (month: string) => {
    setEndMonth(month);
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

  const data = {
    labels: Object.keys(growthMonthly || {}),
    datasets: [
      {
        label: "Growth Rate",
        data: Object.values(growthMonthly || {}).map(value =>
          Number(value).toFixed(2)
        ),
        borderColor: "rgb(46, 139, 87)",
        backgroundColor: "rgba(46, 139, 87, 0.5)",

        tension: 0.2
      }
    ]
  };

  const options = {
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
        align: "top" as "top",
        formatter: function (value: any) {
          return ` ${value} %`;
        }
      }
    }
  };

  return (
    <>
      <div className="flex justify-between flex-wrap sm:flex-nowrap">
        <h2 className="text-xl font-bold tracking-tight ">
          Farms Harvest Rate
        </h2>
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
                .map(month => (
                  <SelectItem
                    key={month.value}
                    value={month.value}
                    disabled={startMonth > month.value}
                    onClick={() => handleChangeEndMonth(month.value)}
                  >
                    {month.label}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" h-96 mt-4">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default GrowthRateLineChart;
