import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import useGetReportDistrictFarm from "../../../hooks/api/get/useGetReportDistrictFarm";
import { formatNumberWithCommas } from "../../../components/lib/utils";

const BarDistrictOverviewAnalytics = () => {
  const { data: districtFarm } = useGetReportDistrictFarm();

  const { highestDistrict, highestHarvest } = useMemo(() => {
    let highestHarvest = Number.MIN_SAFE_INTEGER;
    let highestDistrict = "";

    districtFarm?.forEach(district => {
      if ((district.district_name, district.total_harvest)) {
        if (Number(district.total_harvest) > highestHarvest) {
          highestHarvest = Number(district?.total_harvest);
          highestDistrict = district?.district_name || "";
        }
      }
    });

    return { highestDistrict, highestHarvest };
  }, [districtFarm]);

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
          if (value === "0") {
            return "";
          } else {
            return `${value} KG`;
          }
        }
      }
    }
  };

  return (
    <>
      <h2 className="text-xl font-bold tracking-tight ">
        Harvest Kilogram Each District
      </h2>

      <div className="h-[350px] mt-4">
        <Bar data={data} options={options} />
      </div>
      <p className="text-xs text-gray-400 mt-4">
        The <span className=" text-primary">{highestDistrict}</span> has the
        highest harvest in all districts in Quezon City, with a value of{" "}
        <span className=" text-primary">
          {formatNumberWithCommas(highestHarvest)} KG
        </span>
      </p>
    </>
  );
};

export default BarDistrictOverviewAnalytics;
