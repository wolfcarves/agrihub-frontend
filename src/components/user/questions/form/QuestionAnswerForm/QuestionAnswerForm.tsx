import { Button } from "@components/ui/button";
import { Divider } from "@components/ui/custom";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { FormField } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import useQuestionAnswerMutation from "@hooks/api/post/useQuestionAnswerMutation";
import LoadingSpinner from "@icons/LoadingSpinner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as zod from "zod";

interface QuestionAnswerFormProps {
  questionId?: string;
}

const questionAnswerSchema = zod.object({
  answer: zod
    .string({
      required_error: "Answer is empty"
    })
    .min(1, "Answer is empty")
    .max(500, "Answer is too long")
});

type QuestionAnswer = zod.infer<typeof questionAnswerSchema>;

const QuestionAnswerForm = ({ questionId }: QuestionAnswerFormProps) => {
  const [answerLength, setAnswerLength] = useState<number>(0);

  const { handleSubmit, control, setValue } = useForm<QuestionAnswer>({
    resolver: zodResolver(questionAnswerSchema),
    reValidateMode: "onSubmit",
    mode: "onSubmit",
    resetOptions: {
      keepValues: false
    }
  });

  const { mutateAsync: postAnswer, isLoading: isPostAnswerLoading } =
    useQuestionAnswerMutation();

  const onSubmitAnswerForm = async (data: QuestionAnswer) => {
    try {
      await postAnswer({
        questionId: questionId ?? "0",
        userAnswer: data
      });

      setValue("answer", "");
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitAnswerForm)}>
      <Divider className="py-10" />
      <h5 className="font-poppins-semibold mb-5">Your Answers</h5>
      <FormField
        name="answer"
        control={control}
        render={({ field: { onChange } }) => {
          return !isPostAnswerLoading ? (
            <div className="flex">
              <RichTextEditor
                allowImagePaste={false}
                withToolbar={false}
                onChange={({ charSize }) => {
                  setAnswerLength(charSize ?? 0);
                }}
                onBlur={data => {
                  onChange(data.html);
                }}
                height={300}
              />
            </div>
          ) : (
            <>
              <div className="min-h-[20rem] flex justify-center items-center w-full border mx-auto rounded-lg ">
                <LoadingSpinner className="text-xl" />
              </div>
            </>
          );
        }}
      />

      <Button
        type="submit"
        className="mt-10"
        disabled={answerLength === 0 || isPostAnswerLoading}
      >
        Post Answer
      </Button>
    </form>
  );
};

export default QuestionAnswerForm;
