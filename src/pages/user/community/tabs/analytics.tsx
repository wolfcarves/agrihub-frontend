import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import SuggestionsModal from "@components/user/community/suggestions-modal/modal";
import { TiArrowSortedDown } from "react-icons/ti";
import useGetReportStackBarQuery from "../../../../hooks/api/get/useGetReportStackBarQuery";

Chart.register(...registerables);

const Analytics = () => {
  const { data: stackBar } = useGetReportStackBarQuery();
  console.log(stackBar);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Total Withered and Harvest Crops
  const optionsBar = {
    responsive: true,
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
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
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

  return (
    <>
      <div className="py-10 px-4">
        <div className=" border-black border-1 p-1 grid grid-cols-12 gap-2">
          <div className="h-[400px]  col-span-8 ">
            <h5 className="font-poppins-medium">
              Total Withered & Total Harvest
            </h5>
            <div className=" border border-border p-4 rounded-lg">
              <Bar data={stackBarData} options={optionsBar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;

// const initialData = [
//   {
//     crop_name: "patola",
//     total_harvested: 20,
//     total_withered: 5
//   },
//   {
//     crop_name: "alugbati",
//     total_harvested: 80,
//     total_withered: 5
//   }
// ];

// const initialDataSet = {
//   label: "Total Harvest",
//   backgroundColor: "rgba(75,192,192,0.2)",
//   borderColor: "rgba(75,192,192,1)",
//   borderWidth: 1,
//   hoverBackgroundColor: "rgba(75,192,192,0.4)",
//   hoverBorderColor: "rgba(75,192,192,1)"
// };
// const farmsData = {
//   January: 37,
//   February: 12,
//   March: 85,
//   April: 64,
//   May: 22,
//   June: 91,
//   July: 50,
//   August: 76,
//   September: 18,
//   October: 3,
//   November: 95,
//   December: 42
// };

// const cropsData = {
//   kamatis: 60,
//   talong: 20,
//   petchay: 30,
//   sili: 80,
//   carrots: 90,
//   kangkong: 140
// };

// const getColor = (value: number) => (value < 10 ? "#ff0000" : "#89c26f");

// const farms = {
//   labels: Object.keys(farmsData),
//   datasets: [
//     {
//       label: "Growth Rate",
//       data: Object.values(farmsData),
//       backgroundColor: Object.values(farmsData).map(getColor),
//       borderColor: Object.values(farmsData).map(getColor),
//       borderWidth: 2
//     }
//   ]
// };

// const crops = {
//   labels: Object.keys(cropsData),
//   datasets: [
//     {
//       label: "Production Rate",
//       data: Object.values(cropsData),
//       backgroundColor: Object.values(cropsData).map(getColor),
//       borderColor: "#89c26f",
//       borderWidth: 2
//     }
//   ]
// };

{
  /* <div className="h-[400px] border-black border-1 p-1 grid grid-cols-12 gap-4">
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
                  <TiArrowSortedDown /> 1.37 from last month
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 mt-2 mx-1 ">
          <SuggestionsModal />
        </div>
        <div className="h-[400px] border-black border-1 p-1 grid grid-cols-12 gap-4">
          <div className="col-span-8 border border-border p-4 rounded-lg">
            <Line data={crops} options={chartOptions} />
          </div>
        </div> */
}
