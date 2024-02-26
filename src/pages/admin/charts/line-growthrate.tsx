import React from "react";
import { Line } from "react-chartjs-2";

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Growth Rate",
      data: Array.from(
        { length: DATA_COUNT },
        () =>
          Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) +
          NUMBER_CFG.min
      ),
      borderColor: "rgb(46, 139, 87)",
      backgroundColor: "rgba(46, 139, 87, 0.5)"
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

const GrowthRateLineChart = () => {
  return <Line data={data} options={options} />;
};

export default GrowthRateLineChart;
