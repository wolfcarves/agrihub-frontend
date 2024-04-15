import React, { useState } from "react";
import useGetReportStackBarQuery from "../../../../hooks/api/get/useGetReportStackBarQuery";
import { Bar } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";

const StackbarWitheredHarvest = () => {
  const [monthSelected, setMonthSelected] = useState<string | undefined>(
    undefined
  );
  const { data: stackBar } = useGetReportStackBarQuery({
    month: monthSelected
  });

  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  const stackBarData = {
    labels: stackBar?.map(item => item.crop_name),
    datasets: [
      {
        label: "Total Withered",
        backgroundColor: "rgba(50,205,50,0.2)",
        borderColor: "rgba(50,205,50,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(50,205,50,0.4)",
        hoverBorderColor: "rgba(50,205,50,1)",
        data: stackBar?.map(item => item.total_withered)
        // 25, 20
      },
      {
        label: "Total Harvest",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: stackBar?.map(item => item.total_harvested)
        // 20, 18
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
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <h5 className="font-poppins-medium">Total Withered & Total Harvest</h5>
        <Select
          onValueChange={value =>
            setMonthSelected(value === "all" ? undefined : value)
          }
          defaultValue="all"
        >
          <SelectTrigger className="w-auto ">
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent className=" max-h-[40vh]">
            <SelectItem value={"all"}>All</SelectItem>
            {months.map(month => (
              <SelectItem key={month.value} value={month.value}>
                {month.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="h-[350px]">
        <Bar data={stackBarData} options={optionsBar} />
      </div>
    </>
  );
};

export default StackbarWitheredHarvest;
