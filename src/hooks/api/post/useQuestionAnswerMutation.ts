import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnswersSchema, ForumsService } from "@api/openapi";
import { VIEW_QUESTION_KEY } from "../get/useGetViewQuestion";

const useQuestionAnswerMutationKey = () => "ANSWERS_KEY";

type MutationData = {
  questionId: string;
  userAnswer: AnswersSchema;
};

export default function useQuestionAnswerMutation() {
  const queryClient = useQueryClient();

  return useMutation(
    [useQuestionAnswerMutationKey()],
    (data: MutationData) => {
      const { questionId, userAnswer } = data;
      userAnswer?.answer;

      return ForumsService.postApiForumsCreateAnswers({
        id: questionId,
        requestBody: userAnswer
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [VIEW_QUESTION_KEY()] });
      }
    }
  );
}
