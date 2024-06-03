import React, { MouseEvent, useMemo, useRef, useState } from "react";
import useGetReportLandSizeAnalyticsDistrict from "../../../hooks/api/get/useGetReportLandSizeAnalyticsDistrict";
import useGetReportLandSizeAnalyticsQuery from "../../../hooks/api/get/useGetReportLandSizeAnalyticsQuery";
import { Card } from "../../../components/ui/card";
import { Bar, Doughnut, getElementAtEvent } from "react-chartjs-2";
import { chartColor } from "../../../constants/data";
import { ChartOptions } from "chart.js";
import LandsizeReport from "./reports/landsize-report";

const DougnutLandsizeAnalytics = () => {
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
  const highestPercentage = useMemo(() => {
    const values = Object.values(districtLand ?? {});
    const sumArray = values.reduce((curr, acc) => {
      return Number(curr) + Number(acc);
    }, 0);
    if (extremumData?.highvalue) {
      const percentage = (extremumData?.highvalue / sumArray) * 100;
      return percentage.toFixed(2);
    }
  }, [extremumData?.highvalue]);

  const highestPercentageFarm = useMemo(() => {
    const values = Object.values(farmLand ?? {});
    const sumArray = values.reduce((curr, acc) => {
      return Number(curr) + Number(acc.size);
    }, 0);

    const percentage = (Number(farmLand && farmLand[0].size) / sumArray) * 100;
    return percentage.toFixed(2);
  }, [farmLand]);

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
          | undefined) || undefined
      );
    }
  };

  return (
    <div className=" grid grid-cols-12 gap-4">
      <Card className={`p-5 col-span-12 lg:col-span-4`}>
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-tight ">
              Total Land Size Per District
            </h2>
            <p className="text-xs text-gray-400">
              Click a part to view the land size per farm
            </p>
          </div>
          <LandsizeReport />
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
          Compared to other districts,{" "}
          <span className="text-primary">{extremumData?.highkey}</span> holds a
          dominant position, accounting for a substantial{" "}
          <span className="text-primary">{highestPercentage}%</span>.
        </p>
      </Card>
      {district && (
        <Card className={`p-5 col-span-12 lg:col-span-8`}>
          <h2 className="text-lg font-bold tracking-tight ">
            Land Size Per Farm : {district}
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Among the farms,{" "}
            <span className=" text-primary">
              {farmLand && farmLand[0]?.farm_name}
            </span>{" "}
            claims the top spot with{" "}
            <span className="text-primary">{highestPercentageFarm}%</span>{" "}
            percentage value.
          </p>
          <div className="h-[350px]">
            <Bar data={dataSize} options={optionsBar} />
          </div>
        </Card>
      )}
    </div>
  );
};

export default DougnutLandsizeAnalytics;
