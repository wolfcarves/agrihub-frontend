import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import useGetReportAnalyticsUserFeedback from "../../../hooks/api/get/useGetReportAnalyticsUserFeedback";

const RatesFeedback = () => {
  const { data: userFeedback } = useGetReportAnalyticsUserFeedback();

  const totalFeedback = useMemo(() => {
    return (
      Number(userFeedback?.dissatisfied) +
      Number(userFeedback?.neutral) +
      Number(userFeedback?.satisfied) +
      Number(userFeedback?.very_dissatisfied) +
      Number(userFeedback?.very_satisfied)
    );
  }, [userFeedback]);

  const feedbackPercentage = useMemo(() => {
    return (value: number) => {
      const percentage = value / totalFeedback;
      const final = percentage * 100;
      const finalValue = final.toFixed(0);
      return finalValue;
    };
  }, [totalFeedback]);

  const ratings = [
    {
      value: "5.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.very_satisfied))}%`
    },
    {
      value: "4.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.satisfied))}%`
    },
    {
      value: "3.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.neutral))}%`
    },
    {
      value: "2.0",
      percentage: `${feedbackPercentage(Number(userFeedback?.dissatisfied))}%`
    },
    {
      value: "1.0",
      percentage: `${feedbackPercentage(
        Number(userFeedback?.very_dissatisfied)
      )}%`
    }
  ];
  return (
    <div className="space-y-2 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-md font-bold tracking-tight text-gray-700">
          User Feedback
        </h2>
        <div className="">
          <Link to="/admin/website/user-feedback">
            <Button variant="outline" className="p-2 text-gray-700">
              Suggestions
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-3 mt-2">
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center">
            <p className="text-base text-gray-700 font-bold">{rating.value}</p>
            <svg
              className="w-5 fill-[#333] ml-1"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>

            <div className="bg-gray-300 rounded w-full h-4 ml-3">
              <div
                className={` h-full rounded bg-[#739072]`}
                style={{ width: rating.percentage }}
              ></div>
            </div>
            <p className="text-base text-gray-700 font-bold ml-3">
              {rating.percentage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatesFeedback;
