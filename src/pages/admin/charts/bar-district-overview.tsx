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
        backgroundColor: ["rgba(183, 235, 199, 0.5)"]
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
      datalabels: {
        display: true,
        color: "rgba(1, 50, 67, 1)",
        font: {
          weight: "bold" as "bold"
        },
        formatter: function (value: any) {
          console.log(value);
          if (value === "0") {
            return "";
          } else {
            return value;
          }
        }
      }
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold tracking-tight ">
        Harvest each district
      </h2>

      <div className="h-[350px] mt-4">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default BarDistrictOverview;
