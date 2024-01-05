import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { QuestionSchema } from "@api/openapi";
import { GET_QUESTION } from "../get/useGetQuestionsQuery";

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
        queryKey: [GET_QUESTION("10", "newest")]
      });

      console.log("It is success!!");
    },
    onError: e => {
      console.log("onError: ", e);
    }
  });
}
