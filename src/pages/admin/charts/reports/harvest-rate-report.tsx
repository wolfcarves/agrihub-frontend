import React, { MouseEvent, useMemo, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../../components/ui/dialog";
import logo from "@assets/icons/agrihub-topleaf.svg";
import { Button } from "../../../../components/ui/button";
import { FaRegFilePdf } from "react-icons/fa6";
import { useReactToPrint } from "react-to-print";
import useGetReportGrowthRateMonthly from "../../../../hooks/api/get/useGetReportGrowthRateMonthly";
import useGetReportGrowthRateDistribution from "../../../../hooks/api/get/useGetReportGrowthRateDistribution";
import { ChartOptions } from "chart.js";
import { Bar, getElementAtEvent, Line } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../components/ui/select";
import { formatMonth } from "../../../../components/lib/utils";
const HarvestRateReport = () => {
  const chartRef = useRef();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState<string>(String(currentYear));
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>(String(currentMonth));
  const [activeLabel, setActiveLabel] = useState<string>(
    "" || String(currentMonth)
  );

  const { data: growthMonthly, isLoading: isLoadingLine } =
    useGetReportGrowthRateMonthly({
      year: selectedYear,
      start: startMonth,
      end: endMonth
    });
  const { data: growthDistribution } = useGetReportGrowthRateDistribution({
    month: activeLabel
  });

  const compareDistribution = useMemo(() => {
    if (growthDistribution) {
      const first = Number(growthDistribution[0]?.percentage_distribution);
      const last = Number(
        growthDistribution?.slice(-1)[0]?.percentage_distribution
      );
      const final = first - last;
      return final.toFixed(2);
    }
  }, [growthDistribution]);

  const extremumData = useMemo(() => {
    if (!growthMonthly) return null;

    let highestValue = -Infinity;
    let highestKey = "";
    let lowestValue = Infinity;
    let lowestKey = "";

    // Iterate through data object to find the highest and lowest values and their keys
    for (const [key, value] of Object.entries(growthMonthly)) {
      const numericValue = parseFloat(value);
      if (numericValue > highestValue) {
        highestValue = numericValue;
        highestKey = key;
      }
      if (numericValue < lowestValue) {
        lowestValue = numericValue;
        lowestKey = key;
      }
    }

    return {
      highkey: highestKey,
      highvalue: highestValue,
      lowkey: lowestKey,
      lowvalue: lowestValue
    };
  }, [growthMonthly]);

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
        label: "Harvest Rate",
        data: Object.values(growthMonthly || {}).map(value =>
          Number(value).toFixed(2)
        ),
        borderColor: "rgb(46, 139, 87)",
        backgroundColor: "rgba(46, 139, 87, 0.5)",
        pointRadius: 7,
        pointHoverRadius: 10,
        tension: 0.2
      }
    ]
  };
  const dataGrowth = {
    labels: growthDistribution?.map(item => item.crop_name),
    datasets: [
      {
        label: "Distribution",
        data: growthDistribution?.map(item => item.percentage_distribution),
        backgroundColor: ["rgba(183, 235, 199, 1)"]
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
    onHover: (event: any, chartElement: any) => {
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
        color: "#1F51FF",
        anchor: "end" as "end",
        align: "top" as "top",
        formatter: function (value: any) {
          return ` ${value} %`;
        }
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
        anchor: "start",
        align: "end",
        formatter: function (value, context) {
          if (context.chart.data.labels) {
            return `${context?.chart?.data?.labels[
              context.dataIndex
            ]} - ${value} %`;
          }
        }
      }
    }
  };

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (chartRef.current) {
      const index = getElementAtEvent(chartRef.current, event)[0].index;
      const growthRate = Object.values(growthMonthly || {})[index];

      // Check if growth rate equals 0
      if (Number(growthRate) === 0) {
        return null; // Disable further execution
      }
      const activeLabel = index + 1;
      setActiveLabel(String(activeLabel) || "");
    }
  };
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FaRegFilePdf size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[60rem]">
        <DialogHeader>
          <DialogTitle>Export Harvest Rate </DialogTitle>
          <DialogDescription>
            Select the month you want to export data. Click export when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className=" max-h-[70vh] overflow-auto custom-scroll border border-border p-5">
          <div ref={componentRef} className=" p-5 ">
            <div className=" flex justify-center my-4">
              <img className="h-[4rem]" src={logo as unknown as string} />
            </div>
            <div>
              <div className="flex justify-between flex-wrap sm:flex-nowrap">
                <div>
                  <h2 className="text-xl font-bold tracking-tight ">
                    Farms Harvest Rate
                  </h2>
                  <p className="text-xs text-gray-400 print:hidden">
                    Click the dots to view the Harvest rate summary of that
                    month
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
                        .map(month => (
                          <SelectItem
                            key={month.value}
                            value={month.value}
                            disabled={startMonth + "1" > month.value}
                            onClick={() => handleChangeEndMonth(month.value)}
                          >
                            {month.label}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className=" h-[350px] mt-4 ">
                <Line
                  ref={chartRef}
                  onClick={onClick}
                  data={data}
                  options={options}
                />
              </div>
              {!isLoadingLine && (
                <p className="text-xs text-gray-400 mt-1">
                  Based on the graph,{" "}
                  <span className=" text-blue-600">
                    {Number(extremumData?.highvalue.toFixed(2)) -
                      Number(extremumData?.lowvalue.toFixed(2))}
                    %
                  </span>{" "}
                  is the difference value between the highest harvest rate among
                  the selected timeframe,{" "}
                  <span className=" text-primary">{extremumData?.highkey}</span>{" "}
                  with a harvest rate value of{" "}
                  <span className=" text-primary">
                    {extremumData?.highvalue.toFixed(2)}%
                  </span>{" "}
                  and the lowest harvest rate is in{" "}
                  <span className="  text-destructive">
                    {extremumData?.lowkey}
                  </span>{" "}
                  at{" "}
                  <span className="  text-destructive">
                    {extremumData?.lowvalue.toFixed(2)}%
                  </span>
                  .
                </p>
              )}
            </div>
            <div className="my-8">
              <h2 className="text-lg font-bold tracking-tight ">
                Crops Growth Rate Distribution : {formatMonth(activeLabel)}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                The{" "}
                <span className=" text-primary">
                  {growthDistribution && growthDistribution[0]?.crop_name}
                </span>{" "}
                has the highest contribution this month, with a{" "}
                <span className=" text-primary">{compareDistribution}% </span>{" "}
                gap compared to the crop with the lowest contribution.
              </p>
              <div className="h-[350px]">
                <Bar data={dataGrowth} options={optionsBar} />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-end gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button onClick={() => handlePrint()}>Export</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HarvestRateReport;
