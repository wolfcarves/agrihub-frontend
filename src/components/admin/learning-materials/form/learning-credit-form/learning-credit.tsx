import React from "react";
import { Card } from "@components/ui/card";
import { useParams } from "react-router-dom";
import useGetLearningDraftView from "../../../../../hooks/api/get/useGetLearningView";
import useDeleteLearningCredits from "../../../../../hooks/api/delete/useDeleteLearningCredits";
import { toast } from "sonner";
import { IoTrashOutline } from "react-icons/io5";
import DialogAddCredits from "../../dialogs/dialog-add-credits/dialog-add-credits";
import Loader from "../../../../../icons/Loader";
import DialogEditCredits from "../../dialogs/dialog-edit-credits/dialog-edit-credits";

const LearningCreditPage = () => {
  const { learningsId } = useParams();

  //get present source
  const { data: LearningData, isLoading: isDataLoading } =
    useGetLearningDraftView(learningsId || "");

  //delete source
  const { mutateAsync: deleteResource, isLoading: isDeleteLoading } =
    useDeleteLearningCredits();
  const handleDeleteCredit = async (id: string) => {
    await deleteResource(id);
    toast.success("Credit Deleted Successfully!");
  };
  return (
    <div>
      <div>
        <div className="flex justify-end mb-2">
          <DialogAddCredits />
        </div>
        {LearningData?.learning_credits &&
          LearningData.learning_credits.length <= 0 && (
            <div className="py-10 flex items-center justify-center">
              <h4 className="text-gray-500 font-poppins-medium">
                No Credits Available. Add now...
              </h4>
            </div>
          )}
        <div className="grid grid-cols-12 gap-x-4 gap-y-2">
          {LearningData?.learning_credits?.map((credits, index) => (
            <Card key={index} className=" col-span-4 p-4 mb-4 bg-main relative">
              <h6 className="mb-1 font-poppins-semibold">Credit {index + 1}</h6>
              <div className="absolute flex gap-1 top-1 right-1">
                <IoTrashOutline
                  onClick={() => handleDeleteCredit(credits.id)}
                  size={25}
                  className="  border p-1 rounded-full text-red-600 border-red-400/45 bg-red-300/30 hover:animate-pulse"
                />
                <DialogEditCredits creditId={credits.id} />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <h6 className=" text-green-700 text-xs">Name</h6>
                  <p className=" capitalize font-poppins-medium">
                    {credits.name}
                  </p>
                </div>
                <div>
                  <h6 className=" text-green-700 text-xs">Title</h6>
                  <p className=" capitalize font-poppins-medium">
                    {credits.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Loader isVisible={isDataLoading || isDeleteLoading} />
    </div>
  );
};

export default LearningCreditPage;
