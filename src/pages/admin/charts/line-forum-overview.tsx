import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { CardHeader } from "../../../components/ui/card";
import useGetReportForumsOverview from "../../../hooks/api/get/useGetReportForumsOverview";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
const LineForumOverview = () => {
  const [year, setYear] = useState<string>("2024");
  const { data: forumOverview } = useGetReportForumsOverview({ year: year });

  const data = {
    labels: forumOverview?.map(item => item.month),
    datasets: [
      {
        label: "Questions",
        data: forumOverview?.map(item => item.num_questions),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      },
      {
        label: "Answer",
        data: forumOverview?.map(item => item.num_answers),
        borderColor: "rgb(46, 139, 87)",
        backgroundColor: "rgba(46, 139, 87, 0.5)"
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
        display: "auto",
        color: "rgba(27, 163, 156)",
        anchor: "end" as "end",
        align: "top" as "top",
        formatter: function (value: any) {
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
      <div className="flex justify-end">
        <Select onValueChange={val => setYear(val)}>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="2024" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Line data={data} options={options} />
    </>
  );
};

export default LineForumOverview;
