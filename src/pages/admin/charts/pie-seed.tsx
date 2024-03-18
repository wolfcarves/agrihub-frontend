import React from "react";
import { Pie } from "react-chartjs-2";
import useGetRequestCountGraph from "../../../hooks/api/get/useGetRequestCountGraph";
import useGetReportAnalyticsPiechart from "../../../hooks/api/get/useGetReportAnalyticsPiechart";

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
        backgroundColor: ["rgb(210, 227, 200)", "rgb(79, 111, 82)"]
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
      title: {
        display: true,
        text: "Seedling Request",
        font: {
          size: 14
        }
      }
    }
  };

  return <Pie data={data} options={options} />;
};

export default PieSeed;
