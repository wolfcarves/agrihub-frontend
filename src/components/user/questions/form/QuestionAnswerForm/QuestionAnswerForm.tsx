import { Button } from "@components/ui/button";
import { Divider } from "@components/ui/custom";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { FormField } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import useQuestionAnswerMutation from "@hooks/api/post/useQuestionAnswerMutation";
import ActivityIndicator from "@icons/ActivityIndicator";
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

  const { handleSubmit, control } = useForm<QuestionAnswer>({
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
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitAnswerForm)}>
      <div>
        <Divider className="py-10" />
        <h5 className="font-poppins-medium mb-5">Your Answers</h5>
        <FormField
          name="answer"
          control={control}
          render={({ field: { onChange } }) => {
            return !isPostAnswerLoading ? (
              <RichTextEditor
                allowImagePaste={false}
                withToolbar={false}
                onChange={({ charSize }) => {
                  setAnswerLength(charSize ?? 0);
                }}
                onBlur={data => {
                  onChange(data.html);
                }}
              />
            ) : (
              <>
                <div className="min-h-[20rem] flex justify-center items-center w-full border mx-auto rounded-lg ">
                  <LoadingSpinner className="text-xl" />
                </div>
                <ActivityIndicator />
              </>
            );
          }}
        />
      </div>

      <Button
        className="mt-10"
        disabled={answerLength === 0 || isPostAnswerLoading}
      >
        Post Answer
      </Button>
    </form>
  );
};

export default QuestionAnswerForm;
