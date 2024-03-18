import React from "react";
import { Pie } from "react-chartjs-2";
import useGetReportAnalyticsPiechart from "../../../hooks/api/get/useGetReportAnalyticsPiechart";

const PieProblems = () => {
  const { data: problemsCount } = useGetReportAnalyticsPiechart();
  console.log(problemsCount);
  const DATA_COUNT = 2;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: ["Solved", "Occuring"],
    datasets: [
      {
        label: "",
        data: [
          problemsCount?.solved_farm_problems,
          problemsCount?.pending_farm_problems
        ],
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
        text: "Farm Problems",
        font: {
          size: 14
        }
      }
    }
  };

  return <Pie data={data} options={options} />;
};

export default PieProblems;
