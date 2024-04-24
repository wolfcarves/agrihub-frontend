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
import { Button } from "../../../ui/button";
import useGetProblemsFarmById from "../../../../hooks/api/get/useGetProblemsFarmById";
interface SolutionProps {
  problemId: string;
}
const SolutionModal: React.FC<SolutionProps> = ({ problemId }) => {
  const { data: LearningMaterials } = useGetProblemsFarmById(problemId);

  return (
    <Dialog>
      <DialogTrigger>
        {LearningMaterials?.learning_materials &&
          LearningMaterials?.learning_materials?.length > 0 && (
            <Button variant={"outline"} className="h-6 text-xs">
              Solution
            </Button>
          )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Learning Materials</DialogTitle>
        </DialogHeader>

        <div className="px-[1rem] flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
          {LearningMaterials?.learning_materials?.map((materials, i) => (
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

export default SolutionModal;
