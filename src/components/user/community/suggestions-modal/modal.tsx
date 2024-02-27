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
import { Link } from "react-router-dom";

const SuggestionsModal = () => {
  const { data: LearningMaterials } = useGetReportLearningMaterials();
  console.log(LearningMaterials);
  return (
    <Dialog>
      <DialogTrigger className="bg-red-300 rounded-lg flex items-center p-1 w-full gap-2 px-2 ">
        <IoIosWarning className="text-xl text-red-500" />
        <p className="text-white text-xs">
          Action Needed: Monthly Growth Dips Below 1.37% -{" "}
          <span className="hover:underline underline-offset-3">
            Click here for Immediate Solutions and Contribute Your Insights.
          </span>
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Learning Materials</DialogTitle>
        </DialogHeader>

        <div className="px-[1rem] flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
          {LearningMaterials?.map((materials, i) => (
            <Link key={i} to={`/learning-materials/view/${materials.id}`}>
              <h5 className="underline underline-offset-2 font-poppins-medium text-primary hover:text-green-600">
                {materials.title}
              </h5>
              <p className="  line-clamp-2 text-sm text-gray-700 break-all">
                {parse(materials.content ?? "")}
              </p>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestionsModal;
