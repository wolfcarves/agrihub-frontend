import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import useGetReportGrowthChart from "../../../../hooks/api/get/useGetReportGrowthChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select";
import { useReactToPrint } from "react-to-print";
import { Button } from "../../../ui/button";
import { FaFilePdf } from "react-icons/fa6";
const LinechartGrowthHarvest = () => {
  const [monthSelected, setMonthSelected] = useState<string | undefined>(
    undefined
  );
  const [yearSelected, setYearSelected] = useState<string | undefined>(
    undefined
  );
  const { data: growthChart } = useGetReportGrowthChart({
    month: monthSelected,
    year: yearSelected
  });
  const lineData = {
    labels: growthChart?.map(crop => crop.crop_name),
    datasets: [
      {
        label: "Growth Span",
        data: growthChart?.map(crop => crop.avg_growth_span),
        backgroundColor: "#66CDAA",
        borderColor: "#66CDAA",
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: "Harvest Quantity",
        data: growthChart?.map(crop => crop.avg_harvest_qty),
        backgroundColor: "rgba(37, 116, 169)",
        borderColor: "rgba(37, 116, 169)",
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };
  const chartOptions = {
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
        color: "#1F51FF",
        anchor: "end" as "end",
        align: "top" as "top"
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
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current
  });
  return (
    <div ref={componentRef} className="print:p-2">
      <div className="flex justify-between items-center gap-4">
        <h5 className="font-poppins-medium">Growth Span & Harvest Quantity</h5>
        <div className="flex gap-2">
          <Select
            onValueChange={value => setYearSelected(value)}
            defaultValue="2024"
          >
            <SelectTrigger className="w-auto focus-visible:ring-0">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent className=" max-h-[40vh]">
              <SelectItem value={"2023"}>2023</SelectItem>
              <SelectItem value={"2024"}>2024</SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={value =>
              setMonthSelected(value === "all" ? undefined : value)
            }
            defaultValue="all"
          >
            <SelectTrigger className="w-auto focus-visible:ring-0">
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
          <Button
            className="print:hidden p-4 bg-[#DE2429]"
            onClick={handlePrint}
          >
            <FaFilePdf size={16} />
          </Button>
        </div>
      </div>
      <div className="h-[350px] print:h-[400px]">
        <Line className="chart_export" data={lineData} options={chartOptions} />
      </div>
    </div>
  );
};

export default LinechartGrowthHarvest;
