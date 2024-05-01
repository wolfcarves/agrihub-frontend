import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import useGetReportAnalyticsPiechart from "../../../hooks/api/get/useGetReportAnalyticsPiechart";
import { chartColor } from "../../../constants/data";

const PieProblems = () => {
  const { data: problemsCount } = useGetReportAnalyticsPiechart();

  const compareProblems = useMemo(() => {
    const solve = Number(problemsCount?.solved_farm_problems);
    const pending = Number(problemsCount?.pending_seedling_requests);
    const compareResult = ((solve - pending) / pending) * 100;
    return compareResult.toFixed(2);
  }, [problemsCount]);

  const data = {
    labels: ["Solved", "Occuring"],
    datasets: [
      {
        label: "",
        data: [
          problemsCount?.solved_farm_problems,
          problemsCount?.pending_farm_problems
        ],
        backgroundColor: chartColor.map(color => color)
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        display: false
      }
    },
    plugins: {
      title: {
        display: true,
        text: "Farm Problems",
        font: {
          size: 14
        }
      },
      datalabels: {
        display: "auto",
        color: "rgba(228, 241, 254, 1)",

        offset: 8,
        font: {
          weight: "bold" as "bold",
          size: 14
        }
      }
    }
  };

  return (
    <>
      <div className=" h-[350px]">
        <Pie data={data} options={options} />
      </div>
      <p className="text-xs text-gray-400 mt-4">
        The solved farm problem request has the percentage value of{" "}
        <span
          className={
            problemsCount?.solved_farm_problems &&
            problemsCount?.pending_farm_problems &&
            problemsCount?.solved_farm_problems >
              problemsCount?.pending_farm_problems
              ? "text-primary"
              : "text-destructive"
          }
        >
          {compareProblems}%
        </span>{" "}
        that is{" "}
        {problemsCount?.solved_farm_problems &&
        problemsCount?.pending_farm_problems &&
        problemsCount?.solved_farm_problems >
          problemsCount?.pending_farm_problems
          ? "higher"
          : "lower"}{" "}
        than the currently occuring problems
      </p>
    </>
  );
};

export default PieProblems;
