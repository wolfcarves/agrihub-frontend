import React from "react";
import { Pie } from "react-chartjs-2";
import useGetRequestCountGraph from "../../../hooks/api/get/useGetRequestCountGraph";

const PieSeed = () => {
  const { data: requestCount } = useGetRequestCountGraph();

  const data = {
    labels: ["Given", "Request"],
    datasets: [
      {
        label: "",
        data: [requestCount?.accepted_requests, requestCount?.pending_requests],
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
