import React from "react";
import parse from "html-react-parser";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../ui/dialog";
import { IoIosWarning } from "react-icons/io";
import useGetReportLearningMaterials from "../../../../hooks/api/get/useGetReportLearningMaterials";
import { Link, useParams } from "react-router-dom";
import useGetReportsAnalyticsPredefined from "../../../../hooks/api/get/useGetReportsAnalyticsPredefined";
import useGetAnalyticsLatestHarvestRate from "../../../../hooks/api/get/useGetAnalyticsLatestHarvestRate";

const SuggestionsModal = () => {
  const { id } = useParams();
  const { data: harvestRate } = useGetAnalyticsLatestHarvestRate(id || "");
  // const { data: LearningMaterials } = useGetReportLearningMaterials();
  // const { data: PreDefined } = useGetReportsAnalyticsPredefined();
  // console.log(PreDefined, "ghh");
  return (
    <Dialog>
      <DialogTrigger className="bg-red-300 rounded-lg flex items-center p-1 w-full gap-2 px-2 ">
        <IoIosWarning className="text-xl text-red-500" />
        <p className="text-white text-xs">
          Action Needed: The latest harvest rate is below the previous recorded
          harvest rate -{" "}
          <span className="underline underline-offset-3">
            Click here for Immediate Solutions and Contribute Your Insights.
          </span>
        </p>
      </DialogTrigger>
      <DialogContent>
        {/* <div className="font-poppins-semibold text-xl ">
          Diagnostics for {PreDefined?.plant}:
        </div>
        <div className="flex flex-col justify-center px-4 mb-3">
          <div className="mb-2">{PreDefined?.crop_yield}.</div>
          <div className="mb-2">{PreDefined?.withered_reports}.</div>
          <div className="mb-2">{PreDefined?.net_yield}.</div>
        </div> */}

        <DialogHeader>
          <DialogTitle>Here are suggested actions:</DialogTitle>
        </DialogHeader>
        <div className="px-[1rem] flex flex-col gap-2 max-h-[60vh] overflow-y-auto custom-scroll">
          {harvestRate?.prescriptionMessages?.map((message, i) => (
            <ul>
              <li key={i}>{message}</li>
            </ul>
          ))}
          {/* {LearningMaterials?.map((materials, i) => (
            <Link key={i} to={`/learning-materials/view/${materials.id}`}>
              <h5 className="underline underline-offset-2 font-poppins-medium text-primary hover:text-green-600">
                {materials.title}
              </h5>
              <p className="  line-clamp-2 text-sm text-gray-700 break-all">
                {parse(materials.content ?? "")}
              </p>
            </Link>
          ))} */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestionsModal;
