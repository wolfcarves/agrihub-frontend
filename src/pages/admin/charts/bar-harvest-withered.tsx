import React from "react";
import { Bar } from "react-chartjs-2";

const BarHarvestWithered = () => {
  const DATA_COUNT = 12;
  const today = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const labels = Array.from({ length: DATA_COUNT }, (_, i) => {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    return monthNames[date.getMonth()];
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Harvested",
        data: Array.from({ length: DATA_COUNT }, () =>
          Math.floor(Math.random() * 100)
        ),
        backgroundColor: "rgba(92, 184, 92, 0.2)",
        borderColor: "rgba(92, 184, 92, 1)",
        borderWidth: 1
      },
      {
        label: "Withered",
        data: Array.from({ length: DATA_COUNT }, () =>
          Math.floor(Math.random() * 100)
        ),
        backgroundColor: "rgba(217, 83, 79, 0.2)",
        borderColor: "rgba(217, 83, 79, 1)",
        borderWidth: 1
      }
    ]
  };

  // Chart configuration
  const options = {
    plugins: {
      title: {
        display: false,
        text: "Total withered and harvested crops each month"
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  return (
    <div>
      <Bar data={data} options={options} height={100} />
    </div>
  );
};

export default BarHarvestWithered;
