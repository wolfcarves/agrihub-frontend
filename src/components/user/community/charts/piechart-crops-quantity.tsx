import React from "react";
import useGetReportPiechartQuery from "../../../../hooks/api/get/useGetReportPiechartQuery";
import { Pie } from "react-chartjs-2";
import { chartColor } from "../../../../constants/data";

const PiechartCropsQuantity = () => {
  const { data: pieChart } = useGetReportPiechartQuery();
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  const pieData = {
    labels: pieChart?.map(crop => crop.crop_name),
    datasets: [
      {
        label: "Crop",
        data: pieChart?.map(crop => crop.planted_quantity),
        backgroundColor: chartColor.map(item => item)
      }
    ]
  };
  return (
    <>
      <h5 className="font-poppins-medium">Crops Quantity</h5>
      <div className="h-[400px]  ">
        <Pie data={pieData} options={chartOptions} />
      </div>
    </>
  );
};

export default PiechartCropsQuantity;
