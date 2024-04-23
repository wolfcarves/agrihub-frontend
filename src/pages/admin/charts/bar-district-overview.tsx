import React from "react";
import { Bar } from "react-chartjs-2";
import useGetReportDistrictFarm from "../../../hooks/api/get/useGetReportDistrictFarm";

const BarDistrictOverview = () => {
  const { data: districtFarm } = useGetReportDistrictFarm();

  const data = {
    labels: districtFarm?.map(item => item.district_name),
    datasets: [
      // {
      //   label: "Farms",
      //   data: districtFarm?.map(item => item.total_farms),
      //   backgroundColor: [
      //     "rgba(183, 235, 199, 1)",
      //     "rgba(149, 220, 167, 1)",
      //     "rgba(111, 195, 136, 1)",
      //     "rgba(65, 171, 104, 1)",
      //     "rgba(29, 138, 79, 1)",
      //     "rgba(7, 89, 52, 1)"
      //   ]
      // },
      {
        label: "Harvest",
        data: districtFarm?.map(item => item.total_harvest),
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

  return (
    <>
      <h2 className="text-xl font-bold tracking-tight ">
        Harvest each district
      </h2>

      <div className="h-96 mt-4">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default BarDistrictOverview;
