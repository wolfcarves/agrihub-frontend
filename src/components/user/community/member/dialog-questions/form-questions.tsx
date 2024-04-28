import { zodResolver } from "@hookform/resolvers/zod";
import React, { Dispatch, SetStateAction } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as zod from "zod";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import useCommunityFarmQuestionsCreate from "../../../../../hooks/api/post/useCommunityFarmQuestionsCreate";
import { toast } from "sonner";
import { Form, FormMessage } from "../../../../ui/form";
import Loader from "../../../../../icons/Loader";
import { useParams } from "react-router-dom";
import { DialogFooter } from "../../../../ui/dialog";
import { Button } from "../../../../ui/button";
import { FarmQuestion } from "../../../../../api/openapi";
import useGetCommunityFarmQuestions from "../../../../../hooks/api/get/useGetCommunityFarmQuestions";
interface dialogProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  questionId?: string;
}

const addQuestionSchema = zod.object({
  question: zod
    .string({
      required_error: "Question is required."
    })
    .min(3, "Question is too small")
});
const FormQuestions: React.FC<dialogProps> = ({ setIsOpen, questionId }) => {
  const { id } = useParams();
  const { data: questionData } = useGetCommunityFarmQuestions(id || "");
  const form = useForm<FarmQuestion>({
    resolver: zodResolver(addQuestionSchema),
    mode: "onBlur"
  });

  const { mutateAsync: formMutate, isLoading: formLoading } =
    useCommunityFarmQuestionsCreate();

  const handleSubmitForm = async (data: FarmQuestion) => {
    // const compiledData: FarmQuestion = {
    //   id: null,
    //   farmid: id,
    //   question: data.map(question => question)
    // };

    try {
      await formMutate({ requestBody: data });
      toast.success(`Question Created Successfully!`);
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
          className="grid gap-4"
        >
          <div className="grid gap-4">
            <div className="flex-col gap-4">
              <Label className="text-right font-poppins-medium">Question</Label>
              <Input
                // {...form.register(`questions`)}
                placeholder="Insert question"
                className="col-span-3"
              />
              <FormMessage>{/* {form.formState.errors?.} */}</FormMessage>
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant={"outline"}
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </Form>
      <Loader isVisible={formLoading} />
    </>
  );
};

export default FormQuestions;
