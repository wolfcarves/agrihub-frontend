import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "../../../../ui/drawer";
import { Button } from "../../../../ui/button";
import { MdQuestionMark } from "react-icons/md";
import { useParams } from "react-router-dom";
import useGetCommunityFarmQuestions from "../../../../../hooks/api/get/useGetCommunityFarmQuestions";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageRoundedEdit, BiSolidMessageRoundedAdd } from "react-icons/bi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../../../ui/alert-dialog";
import useDeleteCommunityFarmQuestions from "../../../../../hooks/api/delete/useDeleteCommunityFarmQuestions";
import { toast } from "sonner";
import DialogCreateQuestions from "../dialog-questions/dialog-create-questions";
import Loader from "../../../../../icons/Loader";
import DialogEditQuestions from "../dialog-questions/dialog-edit-questions";

const MemberApplicationDrawer = () => {
  const { id } = useParams();
  const { data: questionData } = useGetCommunityFarmQuestions(id || "");

  const { mutateAsync: deleteMutation, isLoading: deleteLoad } =
    useDeleteCommunityFarmQuestions();
  const handleDelete = async (id: string) => {
    try {
      await deleteMutation(id);
      toast.success("Question Deleted Successfully!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"outline"} className="flex gap-1 items-center">
          <MdQuestionMark />
          Questions
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full  h-[80vh] p-3 md:px-32 overflow-auto scroll-smooth">
          <DrawerHeader>
            <DrawerTitle>Question List</DrawerTitle>
            <DrawerDescription>
              Make questions you want your farmer applicants to answer
            </DrawerDescription>
          </DrawerHeader>
          <div className=" py-4">
            <div className=" flex justify-end">
              <DialogCreateQuestions />
            </div>
            {questionData?.map((question, i) => (
              <div key={i} className="flex items-center gap-2">
                <BsFillQuestionSquareFill className=" text-primary text-2xl" />
                <div>{question.question}</div>
                <div className="flex items-center gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className=" bg-destructive p-3">
                        <RiDeleteBin6Line size={16} />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Do you want to delete this question?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete this question and remove from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(question.id || "")}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  <DialogEditQuestions questionId={question.id || ""} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center justify-end">
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </div>
        </div>
        <Loader isVisible={deleteLoad} />
      </DrawerContent>
    </Drawer>
  );
};

export default MemberApplicationDrawer;
