import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ForumsService } from "@api/openapi";

import { GET_QUESTION_KEY } from "../get/useGetQuestionsQuery";

const useDeleteQuestionMutationKey = () => "DELETE_QUESTION_KEY";

export default function useDeleteQuestionMutation() {
  const queryClient = useQueryClient();

  return useMutation([useDeleteQuestionMutationKey()], {
    async mutationFn(id: string) {
      const response = await ForumsService.deleteApiForumsDeleteQuestion({
        id
      });

      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([GET_QUESTION_KEY()]);
    }
  });
}
