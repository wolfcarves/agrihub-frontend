import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnswersSchema, ForumsService } from "@api/openapi";
import { GET_QUESTION } from "../get/useGetQuestionsQuery";
import { VIEW_QUESTION } from "../get/useGetViewQuestion";

const useQuestionAnswerKey = () => "ANSWERS_KEY";

type MutationData = {
  questionId: string;
  userAnswer: AnswersSchema;
};

export default function useQuestionAnswer() {
  const queryClient = useQueryClient();

  return useMutation(
    [useQuestionAnswerKey()],
    (data: MutationData) => {
      const { questionId, userAnswer } = data;

      return ForumsService.postApiForumsCreateAnswers(questionId, userAnswer);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION()] });
      }
    }
  );
}
