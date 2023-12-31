import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import SuggestionsModal from "@components/user/community/suggestions-modal/modal";
import { TiArrowSortedUp } from "react-icons/ti";

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

  const cropsData = {
    kamatis: 60,
    talong: 20,
    petchay: 30,
    sili: 80,
    carrots: 90,
    kangkong: 140
  };

  const getColor = (value: number) => (value < 10 ? "#ff0000" : "#89c26f");

  const farms = {
    labels: Object.keys(farmsData),
    datasets: [
      {
        label: "Growth Rate",
        data: Object.values(farmsData),
        backgroundColor: Object.values(farmsData).map(getColor),
        borderColor: Object.values(farmsData).map(getColor),
        borderWidth: 2
      }
    ]
  };

  const crops = {
    labels: Object.keys(cropsData),
    datasets: [
      {
        label: "Production Rate",
        data: Object.values(cropsData),
        backgroundColor: Object.values(cropsData).map(getColor),
        borderColor: "#89c26f",
        borderWidth: 2
      }
    ]
  };

  return (
    <>
      <SuggestionsModal />
      <div className="py-10 px-4">
        <div className="h-[400px] border-black border-1 p-1 grid grid-cols-12 gap-4">
          <div className=" col-span-8 border border-border p-4 rounded-lg">
            <Bar data={farms} options={chartOptions} />
          </div>
          <div className=" col-span-4 border border-border p-4 rounded-lg flex flex-col ">
            <div className=" font-semibold text-lg">Growth Rate</div>
            <div className="flex-grow grid place-items-center">
              <div className="text-center">
                <div className="text-[6rem] p-0 m-0 leading-none text-primary">
                  86%
                </div>
                <div className=" text-gray-400 font-medium flex items-center justify-center">
                  <TiArrowSortedUp /> 1.37 from last month
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px] border-black border-1 p-1 grid grid-cols-12 gap-4">
          <div className="col-span-8 border border-border p-4 rounded-lg">
            <Line data={crops} options={chartOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
