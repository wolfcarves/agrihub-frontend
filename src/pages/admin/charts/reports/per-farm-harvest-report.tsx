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
import useGetReportTotalHarvestChart from "../../../../hooks/api/get/useGetReportTotalHarvestChart";
import useGetReportCropDistributionCommunity from "../../../../hooks/api/get/useGetReportCropDistributionCommunity";
import useGetFarmListQuery from "../../../../hooks/api/get/useGetFarmListQuery";
import { chartColor } from "../../../../constants/data";
import { Bar, Doughnut, getElementAtEvent } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../../components/ui/select";
import { formatMonth } from "../../../../components/lib/utils";
import { usePDF } from "react-to-pdf";
import useGetFarmViewQuery from "../../../../hooks/api/get/useGetFarmViewQuery";
const PerFarmHarvestReport = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [selectedYear, setSelectedYear] = useState<string>(
    String(currentYear) || "2"
  );
  const [startMonth, setStartMonth] = useState<string>("1");
  const [endMonth, setEndMonth] = useState<string>(String(currentMonth));
  const [activeIndex, setActiveIndex] = useState<string>(
    "" || String(currentMonth)
  );
  const chartRef = useRef();

  const [farmId, setFarmId] = useState<string>("936975470650327041");

  // const {data: farmDetails} = useGetFarm
  const { data: farmDetails, isLoading: detailLoading } = useGetFarmViewQuery(
    farmId || ""
  );

  const { data: harvestChart, isLoading: loadHarvest } =
    useGetReportTotalHarvestChart({
      id: farmId || "",
      start: startMonth,
      end: endMonth,
      year: selectedYear
    });

  // const result = useMemo(() => {
  //   // Convert values to numbers
  //   const numericValues = Object.entries(harvestChart || []).map(
  //     ([month, value]) => ({
  //       month,
  //       value: parseFloat(value)
  //     })
  //   );

  //   // Find the month of the highest and lowest values
  //   const highestValueObj = numericValues?.reduce((prev, current) =>
  //     prev.value > current.value ? prev : current
  //   );
  //   const lowestValueObj = numericValues?.reduce((prev, current) =>
  //     prev.value < current.value ? prev : current
  //   );

  //   return {
  //     highest: highestValueObj,
  //     lowest: lowestValueObj
  //   };
  // }, [harvestChart]);

  const extremumData = useMemo(() => {
    if (!harvestChart) return null;

    let highestValue = -Infinity;
    let highestKey = "";
    let lowestValue = Infinity;
    let lowestKey = "";

    // Iterate through data object to find the highest and lowest values and their keys
    for (const [key, value] of Object.entries(harvestChart)) {
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
  }, [harvestChart]);

  const lastTwoItem = useMemo(() => {
    const values = Object.values(harvestChart ?? {});
    const slicedValues = values.slice(-2);
    const pm = Number(slicedValues[0]);
    const cm = Number(slicedValues[1]);
    if (cm === 0) {
      return "N/A"; // or any other default value you prefer
    }
    const final = ((cm - pm) / cm) * 100;
    return final.toFixed(2);
  }, [harvestChart]);
  console.log(lastTwoItem);

  const lastTwoMonths = useMemo(() => {
    const values = Object.keys(harvestChart ?? {});
    const slicedValues = values.slice(-2);
    return slicedValues;
  }, [harvestChart]);

  const { data: cropDistribution } = useGetReportCropDistributionCommunity({
    id: farmId || "",
    month: activeIndex
  });

  const lastCrop = useMemo(() => {
    const getLast = cropDistribution?.slice(-1);
    if (getLast) {
      return getLast[0];
    }
  }, [cropDistribution]);

  // const extremumCrops = useMemo(() => {
  //   if (!cropDistribution) return null;

  //   let highestValue = -Infinity;
  //   let highestKey = 0;
  //   let lowestValue = Infinity;
  //   let lowestKey = 0;

  //   // Iterate through data object to find the highest and lowest values and their keys
  //   for (const [key, value] of Object.entries(cropDistribution || {})) {
  //     const numericValue = parseFloat(value);
  //     if (numericValue > highestValue) {
  //       highestValue = numericValue;
  //       highestKey = key;
  //     }
  //     if (numericValue < lowestValue) {
  //       lowestValue = numericValue;
  //       lowestKey = key;
  //     }
  //   }

  //   return {
  //     highkey: highestKey,
  //     highvalue: highestValue,
  //     lowkey: lowestKey,
  //     lowvalue: lowestValue
  //   };
  // }, [cropDistribution]);

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
          console.log(value);
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
        display: "auto",
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
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current
  });

  //   const { toPDF, targetRef } = usePDF({
  //     filename: `${new Date().toLocaleDateString()}-report.pdf`,
  //     page: {
  //       format: "legal"
  //     }
  //   });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FaRegFilePdf size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[60rem]">
        <DialogHeader>
          <DialogTitle>Export Per Farm Harvest </DialogTitle>
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
            <div className=" p-4">
              <div className="flex md:flex-row flex-col gap-4 justify-between ">
                <div>
                  <h5 className="font-poppins-medium">
                    Monthly Harvest Per Farm
                  </h5>
                  <p className="text-xs text-gray-400 print:hidden">
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
                          <SelectItem
                            key={month.value}
                            value={month.value}
                            disabled={month.value === String(currentMonth)}
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
                    Not enough date to current month to compare
                  </p>
                ) : (
                  <p className="text-xs text-gray-400 mt-1">
                    This graph compares the amount of harvest farms collected
                    with the crops as of{" "}
                    <span className=" text-primary">{lastTwoMonths[0]}</span>–
                    <span className=" text-primary">{lastTwoMonths[1]}</span>{" "}
                    <span className=" text-primary">{selectedYear}</span>. Based
                    on system calculations, it seems that your harvest for{" "}
                    <span className=" text-primary">{lastTwoMonths[1]}</span>{" "}
                    has changed by{" "}
                    <span
                      className={
                        Number(lastTwoItem) > 0
                          ? " text-primary"
                          : "text-destructive"
                      }
                    >
                      {lastTwoItem}%
                    </span>{" "}
                    compared to the previous month.
                  </p>
                ))}
            </div>
            <div
              className={`py-6 p-4 rounded-lg duration-300 ${
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
            <div className="mt-6">
              <div className=" font-poppins-medium">Summary Report :</div>
              <ul className=" px-8">
                {!detailLoading && (
                  <li>
                    The highest harvest this year for the{" "}
                    <span className=" text-primary">
                      {farmDetails?.farm_name}
                    </span>{" "}
                    was in{" "}
                    <span className="text-primary">
                      {extremumData?.highkey}
                    </span>{" "}
                    at{" "}
                    <span className="text-primary">
                      {extremumData?.highvalue} KG
                    </span>
                    .{" "}
                    <span className=" text-destructive">
                      {extremumData?.lowkey}
                    </span>{" "}
                    had the lowest harvest at{" "}
                    <span className="text-destructive">
                      {extremumData?.lowvalue} KG
                    </span>
                    .
                  </li>
                )}

                <li>
                  The highest crop harvested in May is{" "}
                  <span className=" text-primary">
                    {cropDistribution && cropDistribution[0].crop_name}
                  </span>{" "}
                  at{" "}
                  <span className=" text-primary">
                    {cropDistribution &&
                      Number(
                        cropDistribution[0].percentage_distribution
                      ).toFixed(2)}{" "}
                    KG
                  </span>
                  .{" "}
                  <span className=" text-destructive">
                    {lastCrop?.crop_name}
                  </span>{" "}
                  had the lowest harvest at{" "}
                  <span className=" text-destructive">
                    {Number(lastCrop?.percentage_distribution).toFixed(2)} KG
                  </span>
                  .
                </li>
              </ul>
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

export default PerFarmHarvestReport;
