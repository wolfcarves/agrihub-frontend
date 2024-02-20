import React, { useEffect, useMemo } from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";
import { NewLearningCredits } from "../../../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addLearningCreditSchema } from "./schema";
import useLearningCreateCredits from "../../../../../hooks/api/post/useLearningCreateCredits";
import { Form } from "../../../../ui/form";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import Loader from "../../../../../icons/Loader";
import usePutLearningUpdateCredits from "../../../../../hooks/api/put/usePutLearningUpdateCredits";
import useGetLearningView from "../../../../../hooks/api/get/useGetLearningView";
interface LearningResourceProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  creditId?: string;
}
const LearningCreditForm: React.FC<LearningResourceProps> = ({
  setIsOpen,
  creditId
}) => {
  const { learningsId } = useParams();
  const form = useForm<NewLearningCredits>({
    resolver: zodResolver(addLearningCreditSchema),
    mode: "onBlur"
  });

  // get present data
  const { data: LearningData, isLoading: LearningDataLoading } =
    useGetLearningView(learningsId || "");

  //get present credits
  const activeCredits = useMemo(() => {
    return LearningData?.learning_credits?.find(
      credit => credit.id === creditId
    );
  }, [LearningData, creditId]);

  // validations
  useEffect(() => {
    if (form.formState.errors.name) {
      toast.error(form?.formState?.errors?.name?.message);
    }
    if (form.formState.errors.title) {
      toast.error(form?.formState?.errors?.title?.message);
    }
  }, [form.formState.errors]);

  //create
  const { mutateAsync: createCreditMutate, isLoading: isCreditLoading } =
    useLearningCreateCredits();

  //edit
  const { mutateAsync: updateCreditMutate, isLoading: isUpdateLoading } =
    usePutLearningUpdateCredits();

  const handleSubmitForm = async (data: NewLearningCredits) => {
    const compiledData: NewLearningCredits = {
      title: data.title,
      name: data.name
    };

    try {
      if (creditId) {
        await updateCreditMutate({
          id: creditId || "",
          requestBody: compiledData
        });
        toast.success("Credit Edited Successfully!");
      } else {
        await createCreditMutate({
          id: learningsId || "",
          requestBody: compiledData
        });
        toast.success("Credit Added Successfully!");
      }
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div className="grid w-full items-center gap-1.5">
            <Label>Name</Label>
            <Input
              type="text"
              defaultValue={activeCredits?.name || ""}
              placeholder="e.g Engr. Jusin F. Malindao"
              {...form.register("name")}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label>Title</Label>
            <Input
              type="text"
              defaultValue={activeCredits?.title || ""}
              placeholder="e.g Agriculturist"
              {...form.register("title")}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <Button
            type="reset"
            variant={"outline"}
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </form>
      <Loader
        isVisible={isCreditLoading || isUpdateLoading || LearningDataLoading}
      />
    </Form>
  );
};

export default LearningCreditForm;
