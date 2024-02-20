import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutResource = () => {
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ["Articles", "Blogs", "Learning Materials", "Events"],
    datasets: [
      {
        label: "Dataset 1",
        data: [45, 25, 15, 32],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)"
        ]
      }
    ]
  };

  return (
    <div className="flex-col justify-center text-center items-center">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutResource;
