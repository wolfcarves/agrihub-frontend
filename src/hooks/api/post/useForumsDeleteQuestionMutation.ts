import { ForumsService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useForumsDeleteQuestionMutation() {
  return useMutation({
    mutationKey: ["FORUMS_DELETE_QUESTION_KEY"],
    mutationFn: async (id: string) => {
      const response = await ForumsService.deleteApiForumsDeleteQuestion({
        id
      });

      return response;
    }
  });
}
