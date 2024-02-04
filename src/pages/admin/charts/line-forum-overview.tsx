import React from "react";
import { Line } from "react-chartjs-2";

const LineForumOverview = () => {
  const DATA_COUNT = 12; // Total months in a year
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const labels = [
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

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Questions",
        data: [45, 60, 30, 80, 20, 70, 50, 55, 70, 40, 65, 75],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Answer",
        data: [30, 40, 70, 20, 50, 10, 90, 60, 45, 75, 35, 80],
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)"
      }
    ]
  };

  return (
    <>
      <Line data={data} />
    </>
  );
};

export default LineForumOverview;
