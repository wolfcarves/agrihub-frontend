import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";
import { QuestionSchema } from "@api/openapi";
import { GET_QUESTION_KEY } from "../get/useGetQuestionsQuery";
import { useNavigate } from "react-router-dom";

const useQuestionKey = () => "QUESTIONS_KEY";

export default function useQuestionAskMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

      navigate("/forum");
    },
    onError: e => {
      console.log("onError: ", e);
    }
  });
}
