import React, { MouseEvent, useRef, useState } from "react";
import useGetReportLandSizeAnalyticsDistrict from "../../../hooks/api/get/useGetReportLandSizeAnalyticsDistrict";
import useGetReportLandSizeAnalyticsQuery from "../../../hooks/api/get/useGetReportLandSizeAnalyticsQuery";
import { Card } from "../../../components/ui/card";
import { Bar, Doughnut, getElementAtEvent } from "react-chartjs-2";
import { chartColor } from "../../../constants/data";
import { ChartOptions } from "chart.js";

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
            ]} - ${value}`;
          }
        }
      }
    }
  };

  const dataSize = {
    labels: farmLand?.map(item => item.farm_name),
    datasets: [
      {
        label: "Growth Rate",
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
      <Card className={`p-5 col-span-12 md:col-span-4`}>
        <div>
          <h2 className="text-lg font-bold tracking-tight ">
            Total Land Size Per District
          </h2>
          <p className="text-xs text-gray-400">
            Click a part to view the land size per farm
          </p>
        </div>
        <div className="h-[350px]">
          <Doughnut
            ref={chartRef}
            onClick={onClick}
            data={data}
            options={options}
          />
        </div>
      </Card>
      <Card className={`p-5 col-span-12 md:col-span-8`}>
        <h2 className="text-lg font-bold tracking-tight ">
          Land Size Per Farm
        </h2>
        <div className="h-[350px]">
          <Bar data={dataSize} options={optionsBar} />
        </div>
      </Card>
    </div>
  );
};

export default DougnutLandsizeAnalytics;
