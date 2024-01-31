import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import SuggestionsModal from "@components/user/community/suggestions-modal/modal";
import { TiArrowSortedDown } from "react-icons/ti";
import useGetReportStackBarQuery from "../../../../hooks/api/get/useGetReportStackBarQuery";
import useGetReportPiechartQuery from "../../../../hooks/api/get/useGetReportPiechartQuery";
import useGetReportTotalHarvestChart from "../../../../hooks/api/get/useGetReportTotalHarvestChart";
import useGetReportGrowthChart from "../../../../hooks/api/get/useGetReportGrowthChart";

Chart.register(...registerables);

const Analytics = () => {
  const { data: stackBar } = useGetReportStackBarQuery();
  const { data: pieChart } = useGetReportPiechartQuery();
  const { data: harvestChart } = useGetReportTotalHarvestChart();
  const { data: growthChart } = useGetReportGrowthChart();
  console.log(pieChart);
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  const stackBarData = {
    labels: stackBar?.map(item => item.crop_name),
    datasets: [
      {
        label: "Total Withered",
        backgroundColor: "rgba(50,205,50,0.2)",
        borderColor: "rgba(50,205,50,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(50,205,50,0.4)",
        hoverBorderColor: "rgba(50,205,50,1)",
        data: stackBar?.map(item => item.total_withered)
        // 25, 20
      },
      {
        label: "Total Harvest",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: stackBar?.map(item => item.total_harvested)
        // 20, 18
      }
    ]
  };

  const lineData = {
    labels: growthChart?.map(crop => crop.crop_name),
    datasets: [
      {
        label: "Growth Span",
        data: growthChart?.map(crop => crop.avg_growth_span),
        backgroundColor: "#66CDAA",
        borderColor: "#66CDAA",
        borderWidth: 2
      },
      {
        label: "Harvest Quantity",
        data: growthChart?.map(crop => crop.avg_harvest_qty),
        backgroundColor: "#20B2AA",
        borderColor: "#20B2AA",
        borderWidth: 2
      }
    ]
  };

  const pieData = {
    labels: pieChart?.map(crop => crop.crop_name),
    datasets: [
      {
        label: "Crop",
        data: pieChart?.map(crop => crop.planted_quantity),
        backgroundColor: ["#228B22", "#2E8B57", "#3CB371", "#32CD32", "#8FBC8F"]
      }
    ]
  };

  const barData = {
    labels: Object.keys(harvestChart || {}),
    datasets: [
      {
        label: "Crop",
        data: Object.values(harvestChart || {}),
        backgroundColor: ["#9ACD32", "#7FFF00", "#98FB98", "#00FA9A", "#00FF7F"]
      }
    ]
  };

  return (
    <>
      <div className="py-10 px-4">
        <div className=" border-black border-1 p-1 grid grid-cols-12 gap-x-4 gap-y-10">
          <div className=" xl:col-span-8 col-span-12">
            <h5 className="font-poppins-medium">
              Total Withered & Total Harvest
            </h5>
            <div className="h-[400px]  border border-border p-4 rounded-lg">
              <Bar data={stackBarData} options={optionsBar} />
            </div>
          </div>
          <div className=" lg:col-span-4 col-span-12">
            <h5 className="font-poppins-medium">Crops Quantity</h5>
            <div className="h-[400px]  border border-border p-4 rounded-lg">
              <Pie data={pieData} options={chartOptions} />
            </div>
          </div>
          <div className="  lg:col-span-6 col-span-12">
            <h5 className="font-poppins-medium">
              Growth Span & Harvest Quantity
            </h5>
            <div className="h-[400px] border border-border p-4 rounded-lg">
              <Line data={lineData} options={chartOptions} />
            </div>
          </div>
          <div className="  lg:col-span-6 col-span-12 ">
            <h5 className="font-poppins-medium">Monthly Harvest</h5>
            <div className="h-[400px]  border border-border p-4 rounded-lg">
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
