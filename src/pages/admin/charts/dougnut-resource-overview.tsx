import React from "react";
import { Doughnut } from "react-chartjs-2";
import useGetReportResourceCount from "../../../hooks/api/get/useGetReportResourceCount";

const DoughnutResource = () => {
  const { data: resourceCount } = useGetReportResourceCount();

  const data = {
    labels: ["Blogs", "Learning Materials", "Events"],
    datasets: [
      {
        label: "",
        data: [
          resourceCount?.blogs,
          resourceCount?.learning_materials,
          resourceCount?.events
        ],
        backgroundColor: ["#4F6F52", "#739072", "#D2E3C8"]
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
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutResource;
