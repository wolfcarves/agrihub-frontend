import React from "react";
import { UserAuth } from "../../../../providers/AuthProvider";
import { IoAddOutline } from "react-icons/io5";
import { Textarea } from "../../../ui/textarea";
import useQuestionAnswer from "../../../../hooks/api/post/useQuestionAnswer";
import { AddAnswer } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnswersSchema } from "../../../../api/openapi";
import { toast } from "sonner";
interface AnswerFormProps {
  questionId: string | undefined;
}
const AnswerForm: React.FC<AnswerFormProps> = ({ questionId }) => {
  const { data: currentUser } = UserAuth() ?? {};

  const { mutateAsync: questionAnswerMutate, isLoading } = useQuestionAnswer();

  const form = useForm<AnswersSchema>({
    resolver: zodResolver(AddAnswer),
    mode: "onChange"
  });
  const handleAnswerSubmit = async (data: AnswersSchema) => {
    const raw = {
      answer: data.answer
    };

    try {
      const answerResponse = await questionAnswerMutate({
        questionId: questionId || "",
        userAnswer: raw
      });

      toast(answerResponse?.message || "");

      form.reset();

      return;
    } catch (e: any) {
      console.log(e.body.message);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleAnswerSubmit)}>
      <div className="flex gap-2">
        <img
          src={currentUser?.avatar}
          className="h-11 w-11 rounded-full border mt-1"
        />
        <div className="w-full">
          <p className="ms-1 text-gray-500 font-medium text-sm mb-1">
            Answer as {currentUser?.username}
          </p>

          <Textarea
            {...form.register("answer")}
            placeholder="Type your answer here."
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 rounded-3xl text-sm flex items-center gap-1"
              disabled={isLoading}
            >
              <IoAddOutline size={20} />
              <span> Add Answer</span>
            </button>
          </div>
        </div>
      </div>
      <hr className="mb-2 mt-3" />
    </form>
  );
};

export default AnswerForm;
