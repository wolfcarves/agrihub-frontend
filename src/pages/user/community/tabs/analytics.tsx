import React from "react";

import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import SuggestionsModal from "@components/user/community/suggestions-modal/modal";
Chart.register(...registerables);

const Analytics = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const farmsData = {
    January: 37,
    February: 12,
    March: 85,
    April: 64,
    May: 22,
    June: 91,
    July: 50,
    August: 76,
    September: 18,
    October: 3,
    November: 95,
    December: 42
  };

  const farms = {
    labels: Object.keys(farmsData),
    datasets: [
      {
        label: "Growth Rate",
        data: Object.values(farmsData),
        backgroundColor: ["#89c26f"],
        borderColor: "#89c26f",
        borderWidth: 2
      }
    ]
  };

  const cropsData = {
    kamatis: 60,
    talong: 20,
    petchay: 30,
    sili: 80,
    carrots: 90,
    kangkong: 140
  };

  const crops = {
    labels: Object.keys(cropsData),
    datasets: [
      {
        label: "Production Rate",
        data: Object.values(cropsData),
        backgroundColor: ["#89c26f"],
        borderColor: "#89c26f",
        borderWidth: 2
      }
    ]
  };

  return (
    <>
      <SuggestionsModal />
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1">
        <div className="h-[400px] border-black border-1 p-1">
          <Bar data={farms} options={chartOptions} />
        </div>
        <div className="h-[400px] border-black border-1 p-1">
          <Line data={crops} options={chartOptions} />
        </div>
      </div>
    </>
  );
};

export default Analytics;
