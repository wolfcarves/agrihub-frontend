import React from "react";
import { Pie } from "react-chartjs-2";

const PieSeed = () => {
  const DATA_COUNT = 2;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ["Given", "Request"],
    datasets: [
      {
        label: "",
        data: Array.from(
          { length: DATA_COUNT },
          () =>
            Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) +
            NUMBER_CFG.min
        ),
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
