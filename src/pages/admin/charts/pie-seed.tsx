import React, { useMemo } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import useGetRequestCountGraph from "../../../hooks/api/get/useGetRequestCountGraph";
import useGetReportAnalyticsPiechart from "../../../hooks/api/get/useGetReportAnalyticsPiechart";
import { chartColor } from "../../../constants/data";

const PieSeed = () => {
  const { data: requestCount } = useGetReportAnalyticsPiechart();

  const compareRequest = useMemo(() => {
    const request = Number(requestCount?.pending_seedling_requests);
    const given = Number(requestCount?.seedling_requests);
    const compareResult = ((given - request) / given) * 100;
    return compareResult.toFixed(2);
  }, [requestCount]);

  const compareRequest1 = useMemo(() => {
    const request = Number(requestCount?.pending_seedling_requests);
    const given = Number(requestCount?.seedling_requests);
    const compareResult = ((request - given) / request) * 100;
    return compareResult.toFixed(2);
  }, [requestCount]);

  const data = {
    labels: ["Given", "Request"],
    datasets: [
      {
        label: "",
        data: [
          requestCount?.seedling_requests,
          requestCount?.pending_seedling_requests
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
        text: "Seedling Request",
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
        <Doughnut data={data} options={options} />
      </div>
      {requestCount?.seedling_requests &&
      requestCount?.pending_seedling_requests &&
      requestCount?.seedling_requests <
        requestCount?.pending_seedling_requests ? (
        <p className="text-xs text-gray-400 mt-4">
          The number of seedlings we provide exceeds the current seedling
          request with a percentage value of{" "}
          <span className="text-primary">{compareRequest}%</span>.
        </p>
      ) : (
        <p className="text-xs text-gray-400 mt-4">
          The number of seedlings we provide exceeds the current seedling
          request with a percentage value of{" "}
          <span className="text-primary">{compareRequest}%</span>.
        </p>
      )}
    </>
  );
};

export default PieSeed;
