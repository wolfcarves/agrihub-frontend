import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import { Button } from "@components/ui/button";

import { Card } from "@components/ui/card";
import { useState } from "react";
import AddLearningCreditForm from "./add-learning-credit-form";
import { useParams } from "react-router-dom";
import useGetLearningDraftView from "../../../../hooks/api/get/useGetLearningDraftView";
import useDeleteLearningCredits from "../../../../hooks/api/delete/useDeleteLearningCredits";
import { toast } from "sonner";

const LearningCreditForm = () => {
  const [hide, setHide] = useState<boolean>(false);
  const { learningsId } = useParams();
  const { data: LearningData } = useGetLearningDraftView(learningsId || "");

  const { mutateAsync: deleteResource } = useDeleteLearningCredits();
  const handleDeleteCredit = async (id: string) => {
    await deleteResource(id);
    toast.success("Credit Deleted Successfully!");
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-2">
        <h2 className="text-md font-bold tracking-tight">Credits</h2>
        <div></div>
      </div>

      {/* credits form */}
      <div>
        {LearningData?.learning_credits?.map((credits, index) => (
          <Card key={index} className="p-4 mb-4">
            <h2 className="text-sm font-bold tracking-tight mb-4">
              Credit {index + 1}
            </h2>
            <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
              <div className="grid w-full max-w-[40rem] items-center gap-1.5">
                <Label>Name</Label>
                <Input
                  type="text"
                  value={credits.name}
                  placeholder="e.g Engr. Jusin F. Malindao"
                  disabled={true}
                />
              </div>

              <div className="grid w-full max-w-[15rem] items-center gap-1.5">
                <Label>Title</Label>
                <Input
                  type="text"
                  value={credits.title}
                  placeholder="e.g Agriculturist"
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-4">
              <Button
                variant="destructive"
                onClick={() => handleDeleteCredit(credits.id)}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
        {hide && (
          <>
            <hr className="my-8" />
            <AddLearningCreditForm setHide={setHide} />
          </>
        )}
        <div className="flex justify-end">
          {hide ? (
            <Button variant={"destructive"} onClick={() => setHide(false)}>
              Cancel
            </Button>
          ) : (
            <Button onClick={() => setHide(true)}>Add more source</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningCreditForm;
