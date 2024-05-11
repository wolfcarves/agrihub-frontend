import React, { useMemo, useRef, useState, MouseEvent } from "react";
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
import { Button } from "../../../../components/ui/button";
import { FaRegFilePdf } from "react-icons/fa6";
import { Card } from "../../../../components/ui/card";
import useGetMonthlyWithered from "../../../../hooks/api/get/useGetMonthlyWithered";
import useGetReportCropDistribution from "../../../../hooks/api/get/useGetReportCropDistribution";
import useGetReportHarvestDistribution from "../../../../hooks/api/get/useGetReportHarvestDistribution";
import { ChartOptions } from "chart.js";
import { Bar, getElementAtEvent, Line } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../components/ui/select";
import { useReactToPrint } from "react-to-print";
import logo from "@assets/icons/agrihub-topleaf.svg";
import { formatMonth } from "../../../../components/lib/utils";
import useAuth from "../../../../hooks/useAuth";
import useYearList from "../../../../hooks/utils/useYearList";

const HarvestKilogramReport = () => {
  const years = useYearList();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const { data: userData } = useAuth();

  const [selectedYear, setSelectedYear] = useState<string>(String(currentYear));
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>(String(currentMonth));
  const [activeLabel, setActiveLabel] = useState<string>(
    "" || String(currentMonth)
  );
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

  // const { prevMonth, activeMonth, percentageHigher } = useMemo(() => {
  //   const barData = barChartData?.slice(-2);
  //   if (barData) {
  //     const prevMonth = barData[0]?.harvested || 0;
  //     const curMonth = barData[1]?.harvested || 0;
  //     const finalValue = ((curMonth - prevMonth) / prevMonth) * 100;
  //     return {
  //       prevMonth: barData[0]?.month,
  //       activeMonth: barData[1]?.month,
  //       percentageHigher: finalValue.toFixed(2)
  //     };
  //   } else {
  //     return {
  //       prevMonth: undefined,
  //       activeMonth: undefined,
  //       percentageHigher: "0.00" // Or any default value you prefer
  //     };
  //   }
  // }, [barChartData]);

  const activePercentage = useMemo(() => {
    const slicedArray = barChartData?.slice(0, -1);
    const activeBarData = barChartData?.slice(-1);

    const sumArray = slicedArray?.reduce((curr, acc) => {
      return Number(curr) + Number(acc.harvested);
    }, 0);

    if (sumArray && slicedArray && activeBarData) {
      const average = sumArray / slicedArray?.length;
      console.log(average, "asdas");
      const pm = average;
      const cm = Number(activeBarData[0].harvested);
      if (cm === 0) {
        return "N/A"; // or any other default value you prefer
      }
      const final = ((cm - pm) / cm) * 100;
      return final.toFixed(2);
    }
  }, [barChartData]);

  const activeMonth = useMemo(() => {
    const barData = barChartData?.slice(-1);
    if (barData) {
      return barData[0];
    }
  }, [barChartData]);

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
      // {
      //   label: "Withered",
      //   data: barChartData?.map(item => item.withered),
      //   backgroundColor: "rgba(255, 182, 193, 0.5)",
      //   borderColor: "rgba(217, 83, 79, 1)",
      //   borderWidth: 1
      // },
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
        color: "rgba(4, 147, 114, 1)",
        formatter: function (value: any) {
          return `${value}KG`;
        }
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
        align: "top" as "top",
        formatter: function (value: any) {
          return `${value} KG`;
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
        anchor: "start", // Anchor the labels to the start of the datapoint
        align: "end", // Align the text after the anchor point
        formatter: function (value, context) {
          if (context.chart.data.labels) {
            return `${context?.chart?.data?.labels[
              context.dataIndex
            ]} - ${value} KG`;
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
          <DialogTitle>Export Harvest Kilogram </DialogTitle>
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
            <div className={`p-5 `}>
              <div className="flex justify-between flex-wrap sm:flex-nowrap ">
                <div>
                  <h2 className="text-lg font-bold tracking-tight ">
                    Farm harvest kilogram each month
                  </h2>
                  <p className="text-xs text-gray-400 print:hidden">
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
                <p className="text-sm mt-1">
                  {/* Based on the graph, the highest harvest among the selected months
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
              . */}
                  This graph compares the amount of harvest you have collected
                  as of
                  {/* <span className="text-primary"> [{prevMonth}]</span>– */}{" "}
                  <span className=" text-primary">[{activeMonth?.month}] </span>{" "}
                  of <span className=" text-primary">[{selectedYear}]</span>.
                  Based on system calculations, it seems that your harvest for
                  this present month has changed by{" "}
                  <span
                    className={
                      Number(activePercentage) > 0
                        ? "text-primary"
                        : "text-destructive"
                    }
                  >
                    [ {activePercentage}% ]
                  </span>{" "}
                  compared to the previous month.
                </p>
              )}
            </div>
            <div className="p-5 lg:col-span-7 col-span-12 my-0">
              <h2 className="text-lg font-bold tracking-tight ">
                Crops Distribution : {formatMonth(activeLabel)}
              </h2>
              <div
                className={`h-[350px] mt-4 duration-300 flex flex-col gap-1`}
              >
                <Line data={lineData} options={optionsLine} />
              </div>
              <p className="text-sm mt-1">
                <span className=" text-primary">
                  {cropDistribution && cropDistribution[0]?.crop_name}
                </span>{" "}
                is higher by{" "}
                <span className=" text-primary">
                  {cropDistribution &&
                    Number(
                      cropDistribution[0]?.percentage_distribution
                    ).toFixed(2)}
                  %
                </span>{" "}
                from other crops in this month
              </p>
            </div>
            <div className={` p-5 duration-300 lg:col-span-5 col-span-12`}>
              <h2 className="text-lg font-bold tracking-tight ">
                Farm Harvest Distribution : {formatMonth(activeLabel)}
              </h2>
              <div className="h-[350px]">
                <Bar data={dataHarvest} options={optionsBar} />
              </div>
              <p className="text-sm mt-1">
                The{" "}
                <span className=" text-primary">
                  {harvestDistribution && harvestDistribution[0]?.farm_name}
                </span>{" "}
                has a harvest value percentage of{" "}
                <span className=" text-primary">
                  {harvestDistribution &&
                    harvestDistribution[0]?.percentage_distribution}
                  %
                </span>{" "}
                compared to the other farms in this month
              </p>
            </div>
            <div className="flex justify-end mt-2">
              <div>
                <p className=" text-base font-poppins-medium text-gray-500">
                  Exported by : {userData?.firstname + " " + userData?.lastname}
                </p>
                <p className="text-sm font-poppins-medium text-gray-500 text-end">
                  {currentDate.toDateString()}
                </p>
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

export default HarvestKilogramReport;
