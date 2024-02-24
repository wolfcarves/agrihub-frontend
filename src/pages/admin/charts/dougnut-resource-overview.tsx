import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutResource = () => {
  const DATA_COUNT = 4;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ["Blogs", "Learning Materials", "Events"],
    datasets: [
      {
        label: "",
        data: [45, 25, 15],
        backgroundColor: [
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
