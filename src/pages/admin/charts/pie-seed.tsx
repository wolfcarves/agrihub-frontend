import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import useGetRequestCountGraph from "../../../hooks/api/get/useGetRequestCountGraph";
import useGetReportAnalyticsPiechart from "../../../hooks/api/get/useGetReportAnalyticsPiechart";
import { chartColor } from "../../../constants/data";

const PieSeed = () => {
  const { data: requestCount } = useGetReportAnalyticsPiechart();

  const data = {
    labels: ["Given", "Request"],
    datasets: [
      {
        label: "",
        data: [
          requestCount?.seedling_requests,
          requestCount?.pending_seedling_requests
        ],
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
      title: {
        display: true,
        text: "Seedling Request",
        font: {
          size: 14
        }
      },
      datalabels: {
        display: "auto",
        color: "rgba(228, 241, 254, 1)",

        offset: 8,
        font: {
          weight: "bold" as "bold",
          size: 14
        }
      }
    }
  };

  return (
    <div className=" h-[350px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieSeed;
