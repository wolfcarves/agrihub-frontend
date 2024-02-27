import { ForumsService } from "@api/openapi";
import { useMutation } from "@tanstack/react-query";

export default function useForumsSaveQuestionMutation() {
  return useMutation({
    mutationKey: ["FORUMS_SAVE_QUESTION_KEY"],
    mutationFn: async (id: string) => {
      const response = await ForumsService.postApiForumsSaveQuestion({
        id
      });

      return response;
    }
  });
}
