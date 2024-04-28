import { zodResolver } from "@hookform/resolvers/zod";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as zod from "zod";
import { Label } from "../../../../ui/label";
import { Input } from "../../../../ui/input";
import useCommunityFarmQuestionsCreate from "../../../../../hooks/api/post/useCommunityFarmQuestionsCreate";
import { toast } from "sonner";
import Loader from "../../../../../icons/Loader";
import { useParams } from "react-router-dom";
import { DialogFooter } from "../../../../ui/dialog";
import { Button } from "../../../../ui/button";
import { FarmQuestion, FarmQuestionItem } from "../../../../../api/openapi";
import useGetCommunityFarmQuestions from "../../../../../hooks/api/get/useGetCommunityFarmQuestions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";

interface dialogProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  questionId?: string;
}

const addQuestionSchema = zod.object({
  questions: zod.array(
    zod.object({
      id: zod.string().optional(),
      farmid: zod.string(),
      question: zod.string()
    })
  )
});

const FormQuestions: React.FC<dialogProps> = ({ setIsOpen, questionId }) => {
  const { id } = useParams();
  const { data: questionData } = useGetCommunityFarmQuestions(id || "");
  const form = useForm<zod.infer<typeof addQuestionSchema>>({
    resolver: zodResolver(addQuestionSchema),
    mode: "onBlur"
  });

  const { mutateAsync: formMutate, isLoading: formLoading } =
    useCommunityFarmQuestionsCreate();

  const handleSubmitForm = async (
    data: zod.infer<typeof addQuestionSchema>
  ) => {
    const compiledData = data.questions;

    console.log(compiledData);
    try {
      await formMutate({ requestBody: compiledData });
      toast.success(`Question Created Successfully!`);
      setIsOpen(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  const { fields, replace } = useFieldArray({
    control: form.control,
    name: "questions",
    rules: {
      required: true,
      minLength: 1,
      maxLength: 5
    },
    keyName: "uid"
  });

  useEffect(() => {
    if (questionId) {
      const questionToEdit = questionData?.find(
        item => item?.id === questionId
      );

      replace([questionToEdit] as {
        farmid: string;
        question: string;
        id?: string | undefined;
      }[]);
    } else {
      replace({
        farmid: id ?? "",
        question: ""
      });
    }
  }, [questionData]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="grid gap-4"
        >
          <div className="grid gap-4">
            {fields.map((question, index) => (
              <div className="flex-col gap-4" key={index}>
                <Label className="text-right font-poppins-medium">
                  Question
                </Label>
                <FormField
                  control={form.control}
                  name={`questions.${index}.question`}
                  defaultValue={question?.question}
                  // disabled={!isEditing}
                  render={({ field, fieldState }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Insert question"
                          className="col-span-3"
                        />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />

                <FormMessage>{/* {form.formState.errors?.} */}</FormMessage>
              </div>
            ))}
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
