import React from "react";
import { Bar } from "react-chartjs-2";

const BarDistrictOverview = () => {
  const labels = [
    "District 1",
    "District 2",
    "District 3",
    "District 4",
    "District 5",
    "District 6"
  ];

  const farmsData = [65, 59, 80, 81, 56, 55];
  const harvestData = [30, 45, 60, 75, 50, 40];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Farms",
        data: farmsData,
        backgroundColor: [
          "rgba(183, 235, 199, 1)",
          "rgba(149, 220, 167, 1)",
          "rgba(111, 195, 136, 1)",
          "rgba(65, 171, 104, 1)",
          "rgba(29, 138, 79, 1)",
          "rgba(7, 89, 52, 1)"
        ]
      },
      {
        label: "Harvest",
        data: harvestData,
        backgroundColor: [
          "rgba(183, 235, 199, 0.5)",
          "rgba(149, 220, 167, 0.5)",
          "rgba(111, 195, 136, 0.5)",
          "rgba(65, 171, 104, 0.5)",
          "rgba(29, 138, 79, 0.5)",
          "rgba(7, 89, 52, 0.5)"
        ]
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

  return <Bar data={data} options={options} />;
};

export default BarDistrictOverview;
