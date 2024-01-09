import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { QuestionSchema } from "@api/openapi";
import { GET_QUESTION_KEY } from "../get/useGetQuestionsQuery";

const useQuestionKey = () => "QUESTIONS_KEY";

export default function useQuestionAskMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [useQuestionKey()],
    mutationFn: async (formData: QuestionSchema) => {
      const response = await ForumsService.postApiForums({
        formData
      });

      return response;
    },
    onSuccess: e => {
      queryClient.invalidateQueries({
        queryKey: [GET_QUESTION_KEY()]
      });
    },
    onError: e => {
      console.log("onError: ", e);
    }
  });
}
