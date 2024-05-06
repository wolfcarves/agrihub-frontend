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
import { Bar, Doughnut, getElementAtEvent } from "react-chartjs-2";
import useGetReportLandSizeAnalyticsDistrict from "../../../../hooks/api/get/useGetReportLandSizeAnalyticsDistrict";
import useGetReportLandSizeAnalyticsQuery from "../../../../hooks/api/get/useGetReportLandSizeAnalyticsQuery";
import { chartColor } from "../../../../constants/data";
import { ChartOptions } from "chart.js";
import { formatNumberWithCommas } from "../../../../components/lib/utils";
const LandsizeReport = () => {
  const [district, setDistrict] = useState<
    | "District 1"
    | "District 2"
    | "District 3"
    | "District 4"
    | "District 5"
    | "District 6"
    | undefined
  >();

  const chartRef = useRef();

  const { data: farmLand } = useGetReportLandSizeAnalyticsDistrict({
    district: district
  });
  const { data: districtLand } = useGetReportLandSizeAnalyticsQuery();
  console.log(districtLand);
  const extremumData = useMemo(() => {
    if (!districtLand) return null;

    let highestValue = -Infinity;
    let highestKey = "";
    let lowestValue = Infinity;
    let lowestKey = "";

    // Iterate through data object to find the highest and lowest values and their keys
    for (const [key, value] of Object.entries(districtLand)) {
      const numericValue = parseInt(value);
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
  }, [districtLand]);

  const data = {
    labels: Object.keys(districtLand || {}),
    datasets: [
      {
        // label: Object.keys(districtLand || {}),
        data: Object.values(districtLand || {}),
        backgroundColor: chartColor.map(color => color)
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        display: false
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
        color: "rgba(228, 241, 254, 1)",

        offset: 8,
        font: {
          weight: "bold" as "bold",
          size: 12
        },
        formatter: function (value: any) {
          return ` ${value} sqm`;
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
            ]} - ${value} sqm`;
          }
        }
      }
    }
  };

  const dataSize = {
    labels: farmLand?.map(item => item.farm_name),
    datasets: [
      {
        label: "Land Size",
        data: farmLand?.map(item => item.size),
        backgroundColor: ["rgba(183, 235, 199, 1)"]
      }
    ]
  };

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (chartRef.current) {
      const index = getElementAtEvent(chartRef.current, event)[0].index;
      const val = Object.keys(districtLand || {})[index];

      // // Check if growth rate equals 0
      // if (Number(growthRate) === 0) {
      //   return null; // Disable further execution
      // }
      // const activeLabel = index + 1;
      setDistrict(
        (val as
          | "District 1"
          | "District 2"
          | "District 3"
          | "District 4"
          | "District 5"
          | "District 6"
          | undefined) || "District 1"
      );
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
          <DialogTitle>Export Land Size </DialogTitle>
          <DialogDescription>
            Select the district you want to export data. Click export when
            you're done.
          </DialogDescription>
        </DialogHeader>
        <div className=" max-h-[70vh] overflow-auto custom-scroll border border-border p-5">
          <div ref={componentRef} className=" p-5 ">
            <div className=" flex justify-center my-4">
              <img className="h-[4rem]" src={logo as unknown as string} />
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-bold tracking-tight ">
                    Total Land Size Per District
                  </h2>
                  <p className="text-xs text-gray-400 print:hidden">
                    Click a part to view the land size per farm
                  </p>
                </div>
              </div>
              <div className="h-[350px]">
                <Doughnut
                  ref={chartRef}
                  onClick={onClick}
                  data={data}
                  options={options}
                />
              </div>
              <p className="text-xs text-gray-400 mt-4">
                <span className=" text-primary">{extremumData?.highkey}</span>{" "}
                has the largest total land size at{" "}
                <span className=" text-primary">
                  {formatNumberWithCommas(extremumData?.highvalue || 0)}
                </span>{" "}
                sqm. The smallest total land size is{" "}
                <span className=" text-destructive">
                  {extremumData?.lowkey}
                </span>{" "}
                at{" "}
                <span className=" text-destructive">
                  {formatNumberWithCommas(extremumData?.lowvalue || 0)}
                </span>{" "}
                sqm
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-lg font-bold tracking-tight ">
                Land Size Per Farm : {district}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                The{" "}
                <span className=" text-primary">
                  {farmLand && farmLand[0]?.farm_name}
                </span>{" "}
                has the largest land size in this district with a value of{" "}
                <span className=" text-primary">
                  {farmLand &&
                    formatNumberWithCommas(Number(farmLand[0]?.size) || 0)}
                </span>{" "}
                sqm
              </p>
              <div className="h-[350px]">
                <Bar data={dataSize} options={optionsBar} />
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

export default LandsizeReport;
